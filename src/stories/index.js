import React from 'react';
import { storiesOf } from '@storybook/react';
import RandomizeButton from './components/randomize_button'
import DisplayTweet from './components/embed_tweet';
import TweetContainer from './components/tweet_container';

storiesOf('Components', module)
  .add('Randomize Me Button', () => (
    <RandomizeButton />
  ))
  .add('Example Embedded Tweet', () => (
    <DisplayTweet tweetId={'1041945336866983936'} />
  ));

storiesOf('Prototype', module)
  .add('Randomizer Example', () => {
    return (
      <TweetContainer />
    );
  });
