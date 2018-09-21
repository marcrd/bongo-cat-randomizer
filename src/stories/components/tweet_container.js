import React from 'react';
import RandomizeButton from './randomize_button'
import DisplayTweet from './embed_tweet';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tweetId: ''};
  }

  setTweet(tweetId) {
    this.setState({tweetId: tweetId});
  }

  static defaultProps = {
    tweetId: '1041945336866983936'
  }

  render() {
    const tweetId = this.state.tweetId;

    return (
      <div>
        <DisplayTweet tweetId={tweetId} />
        <RandomizeButton getTweet={(tweetId) => this.setTweet(tweetId)}/>
      </div>
    );
  }
}

export default TweetContainer;
