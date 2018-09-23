import React from 'react';
import { storiesOf } from '@storybook/react';
import RandomizeButton from './components/randomize_button'
import DisplayTweet from './components/embed_tweet';
import TweetContainer from './components/tweet_container';

storiesOf('Components', module)
  .add('Randomize Me Button', () => (
    <RandomizeButton
      tweetList={tweetList}
      getTweet={(tweet) => console.log(tweet)}
    />
  ))
  .add('Example Embedded Tweet', () => (
    <DisplayTweet tweetId={'1041945336866983936'} />
  ));

storiesOf('Prototype', module)
  .add('Randomizer Example', () => {
    return (
      <TweetContainer tweetList={tweetList} />
    );
  });

const tweetList = [
  {
    id: '1041945336866983936'
  },
  {
    id: '1042117095260139520'
  },
  {
    id: '1042141269672243200'
  },
  {
    id: '1042140031429824517'
  },
  {
    id: '1041426791921930240',
  },
  {
    id: '1041421444431982593',
  },
  {
    id: '1041030750206873600',
  },
  {
    id: '1041136200914952193',
  },
  {
    id: '1040673002680188928',
  },
  {
    id: '1041382878528061440',
  },
  {
    id: '1040727049441296385',
  },
  {
    id: '1041007925425258496',
  },
  {
    id: '1040934898197061632',
  },
  {
    id: '1040596319843172353',
  },
  {
    id: '1040033891703300096',
  },
  {
    id: '1040226240920055808',
  },
  {
    id:  '1039758897517604864'
  }
];
