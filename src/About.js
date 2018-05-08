import React, { Component } from 'react';
import theDev from './theDev.png'

class About extends Component {
  render(){
    return(
        <div className="row" id="About">
          <div className="col-4">
            <h3>About this project</h3>
            <p>The aim of this project is to integrate the mapbox api and react-leaflet module, and practice deploying to production.  </p>
          </div>
          <div className="col-4">
            <h3>About the developer</h3>
            <p>Stephanie is a junior full-stack developer with a passion for learning about tech, cooking delicious meals, and exploring new places!</p>
            <img id="profilePic" src={theDev}/>
          </div>
          <div className="col-4">
            <h3>Get in touch!</h3>
              <a className='social' href="https://github.com/snopeks"><p>Github</p></a>
              <a className='social' href="https://www.linkedin.com/in/snopeks/"><p>Linkedin</p></a>
          </div>
          <div className="col-12">
            <p id="thanks">Thanks for dropping by!</p>
          </div>
        </div>
    )
  }
}
export default About