import React from 'react';
import RandomizeButton from './randomize_button'
import DisplayTweet from './embed_tweet';
import TweetDisplayHelper from './tweet_display_helper';
import Tags from './tags';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

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
      tweetList,
      debug
    } = this.props;

    return (
      <Container>
        <DisplayTweet tweetId={this.state.tweet.id} />
          <Tags tags={this.state.tweet.tags} />
          <RandomizeButton
            tweetList={tweetList}
            getTweet={(tweet) => this.setTweet(tweet)}
          />
        {/* Display this for now inside story book for testing and tagging purposes */}
        {debug && <TweetDisplayHelper tweet={this.state.tweet} /> }
      </Container>
    );
  }
}

export default TweetContainer;
