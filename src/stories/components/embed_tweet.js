import React, {Component} from 'react';
import { Tweet } from 'react-twitter-widgets';

class DisplayTweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tweet tweetId={this.props.tweetId} />
    )
  }
}

export default DisplayTweet;
