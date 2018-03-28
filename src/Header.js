import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">React Map App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;