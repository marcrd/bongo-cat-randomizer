import React from 'react';
import styled from 'react-emotion';

const BongoCatButton = styled.button({
  background: '#F78AE0',
  color: '#FFF',
  fontSize: 18,
  border: 0,
  height: 42,
  width: 160,
  borderRadius: 2
});

function randomizeTweetList(tweetList) {
  return tweetList[Math.floor(Math.random() * tweetList.length)]
}

export default function RandomizeButton({getTweet, tweetList}) {
  return (
    <BongoCatButton onClick={() => getTweet(randomizeTweetList(tweetList))}>
      Bongo Me Baby
    </BongoCatButton>
  );
}
