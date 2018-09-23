import React from 'react';
import RandomizeButton from './randomize_button'
import DisplayTweet from './embed_tweet';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tweet: ''};
  }

  setTweet(tweet) {
    this.setState({tweet});
  }

  static defaultProps = {
    tweet: {
      id: '1041945336866983936'
    }
  }

  render() {
    const {
      tweetList
    } = this.props;

    return (
      <div>
        <DisplayTweet tweetId={this.state.tweet.id} />
        <RandomizeButton
          tweetList={tweetList}
          getTweet={(tweet) => this.setTweet(tweet)}
        />
      </div>
    );
  }
}

export default TweetContainer;
