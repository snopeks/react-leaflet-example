import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [51.505, -0.09]
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(lat, lng){
    this.setState({center: [lat, lng]})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container main">
        <Switch>
          <Route
          exact path="/"
          component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
        </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

