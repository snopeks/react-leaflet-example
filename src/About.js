import React, { Component } from 'react';


class About extends Component {
  render(){
    return(
        <div className="row" id="About">
          <div className="col-4">
            <h3>About this project</h3>
            <p>The aim of this project is to integrate the mapbox api and `react-leaflet` module, and practice deploying to production.  </p>
          </div>
          <div className="col-4">
            <h3>About the developer</h3>
            <p>Stephanie is a junior full-stack developer with a passion for learning about tech, cooking delicious meals, exploring new places and having fun!</p>
            <img src="#"></img>
          </div>
          <div className="col-4">
            <h3>Get in touch!</h3>
            <ul>
              <li>
                <a href="https://github.com/snopeks">Github</a>
              </li>
              <li>
                <a href="linkedin!">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
export default About