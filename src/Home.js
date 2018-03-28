import React, { Component } from 'react';
import SimpleExample from './SimpleExample';
import Search from './Search';
import LocationList from './LocationList';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: [51.505, -0.09]
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(lat, lng){
    this.setState({center: [lat, lng]})
  }
  render(){
    const favs = {
      header: "Some Favorites",
      locations: [
        {
          name: 'Vancouver',
          coordinates: [49.28, -123.12]
        },
        {
          name: 'San Francisco',
          coordinates: [37.77, -122.41]
        },
        {
          name: 'Frankfurt',
          coordinates: [50.11, 8.68]
        }
      ]
    }
    return(
      <div className="row">
        <div className="col-12">
          <h1>Click anywhere on the map</h1>
          <SimpleExample location={this.state.center} onChange={this.handleSearch} ></SimpleExample>
        </div>
        <Search onChange={this.handleSearch}></Search>
        <LocationList title={favs.header} locations={favs.locations} onChange={this.handleSearch}></LocationList>
      </div>
    )
  }
}

export default Home