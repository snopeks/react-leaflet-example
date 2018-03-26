import React, { Component } from 'react';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: ''
    }

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
      let searchbar = document.getElementById('searchbar')
      searchbar.value = ''
    })
  }


  render(){
    return(
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label fo="searchbar">Where would you like to go?</label>
              <input className="form-control" id="searchbar" type="text" value={this.state.query} onChange={this.updateValue} placeholder="Enter a location"/>
            </div>
            <button className="btn btn-custom" type="submit">Search</button>
          </form>
        </div>
    )}
}