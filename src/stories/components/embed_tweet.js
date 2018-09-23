import React from 'react';
import { Tweet } from 'react-twitter-widgets';

export default function DisplayTweet({tweetId}) {
  return (
    <Tweet tweetId={tweetId} />
  );
};
