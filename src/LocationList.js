import React, { Component } from 'react';
import Location from './Location'

class LocationList extends Component {
  render(){
      let locations = this.props.locations.map((location, index) => (
          <Location message={location.name} center={location.coordinates} key={index} />
      ))
    return (
      <div className='location-list col-6'>
        <h3>{this.props.title}</h3>
        {locations}
      </div>
    )
  }
}

export default LocationList