import React from 'react';
import styled from '@emotion/styled';

const BongoCatButton = styled.button({
  background: '#F78AE0',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  color: '#FFF',
  fontSize: 18,
  border: 0,
  height: 42,
  width: '100%',
  borderRadius: 2,
  display: 'block',
  maxWidth: 500 // Make sure we don't overflow on large screen sizes.
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
