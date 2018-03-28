import React, { Component } from 'react';

class Location extends Component {
  constructor(props){
    super(props)

    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(){
    console.log(this.props.center)
  }
  render(){
    return (
      <div className="col-12">
        <p>{this.props.message}</p>
        <button className="btn btn-secondary"  onClick={this.buttonClick}>{this.props.message}!</button>
      </div>
    )
  }
}

export default Location