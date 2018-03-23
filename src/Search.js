import React, { Component } from 'react';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: ''
    }

    // this.buttonClick = this.buttonClick.bind(this);
    // this.mapClick = this.mapClick.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateValue(e){
    this.setState({query: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    let searchQuery = this.state.query
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=pk.eyJ1Ijoic3RlcGhzbm9wZWsiLCJhIjoiY2plaGg1OXY4MGF0NjJ3bmxwNXZiY3VoayJ9.nDLlDzAz5UZYZH0I5SYSpA`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let lng = data.features[0].geometry.coordinates[0]
      let lat = data.features[0].geometry.coordinates[1]
      //this onChange is referencing the onChange in App.js
      this.props.onChange(lat, lng)
    })
  }


  render(){
    return(
      <div>
        <h2>Where in the world!!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.updateValue} placeholder="Search map"/>
          <input type="submit"/>
        </form>
      </div>
    )}
}