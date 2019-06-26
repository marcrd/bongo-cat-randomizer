import React from 'react';
import { storiesOf } from '@storybook/react';
import RandomizeButton from './components/randomize_button'
import DisplayTweet from './components/embed_tweet';
import Tags from './components/tags';
import TweetContainer from './components/tweet_container';
import Layout from './components/layout';
import * as JSONStubs from '../stubs/tweetList';

storiesOf('Components', module)
  .add('Randomize Me Button', () => (
    <RandomizeButton
      tweetList={JSONStubs.TWEET_LIST}
      getTweet={(tweet) => console.log(tweet)}
    />
  ))
  .add('Example Embedded Tweet', () => (
    <DisplayTweet tweetId={'1041945336866983936'} />
  ))
  .add('Tweet Tags', () => (
    <Tags tags={exampleTweet.tags} />
  ));

storiesOf('Prototype', module)
  .add('Randomizer Example', () => {
    return (
      <TweetContainer debug={true} tweetList={JSONStubs.TWEET_LIST} />
    );
  })
  .add('Full Layout', () => {
    return (
      <Layout tweetList={JSONStubs.TWEET_LIST} />
    );
  });

const exampleTweet = {
  name: 'come-on-and-slam',
  id: '1041945336866983936',
  tags: ['ComeOnAndSlam', 'SpaceJam', 'BongoCat']
};