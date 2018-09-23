import React from 'react';

function randomizeTweetList(tweetList) {
  return tweetList[Math.floor(Math.random() * tweetList.length)]
}

export default function RandomizeButton({getTweet, tweetList}) {
  return (
    <button onClick={() => getTweet(randomizeTweetList(tweetList))}>
      Bongo Me Baby
    </button>
  );
}
