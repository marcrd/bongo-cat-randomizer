import React, { Component } from 'react';
import './App.css';
import * as JSONStubs from './stubs/tweetList';
import Layout from './components/layout';
// <Layout tweetList={JSONStubs.TWEET_LIST} />


class App extends Component {
  render() {
    return (
      <div>
        <Layout tweetList={JSONStubs.TWEET_LIST} />
      </div>
    );
  }
}

export default App;
