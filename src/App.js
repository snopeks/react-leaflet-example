import React, { Component } from 'react';
import './App.css';
import SimpleExample from './SimpleExample';
import Search from './Search';
import Post from './Post';
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
    const post = {
      title: "New Post!",
      author: "Stephanie Snopek",
      body: "I am just excited to be here.",
      comments: ['great!', 'good work', 'thanks']
    }
    return (
      <div className="App">
        <div className="container">
        <SimpleExample location={this.state.center} onChange={this.handleSearch} ></SimpleExample>
          <div className="row">
            <Search onChange={this.handleSearch}></Search>
            <Post title={post.title} author={post.author} body={post.body} comments={post.comments}></Post>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

