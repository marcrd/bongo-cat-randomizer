import React from 'react';
import RandomizeButton from './randomize_button'
import DisplayTweet from './embed_tweet';
import TweetDisplayHelper from './tweet_display_helper';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: {
        name: 'come-on-and-slam',
        id: '1041945336866983936',
        tags: ['ComeOnAndSlam', 'SpaceJam', 'BongoCat']
      }
    };
  }

  setTweet(tweet) {
    this.setState({tweet});
  }

  static defaultProps = {
    tweet: {
      id: '1041945336866983936',
      tags: []
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
        {/* Display this for inside story book for testing and tagging purposes */}
        <TweetDisplayHelper tweet={this.state.tweet} />
      </div>
    );
  }
}

export default TweetContainer;
