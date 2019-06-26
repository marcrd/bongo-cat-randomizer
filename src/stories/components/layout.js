import React from 'react';
import styled from 'react-emotion';
import TweetContainer from './tweet_container';

const Footer = styled.div({
  gridArea: 'footer',
  marginTop: '20px',
  fontSize: 18, 
  fontType: 'sans-serif',
  width: '100%',
  display: 'block',
  whiteSpace: 'nowrap',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'
});

const Content = styled.div({
  gridArea: 'content'
});

const Wrapper = styled.div({
  display: 'grid',
  // Classic 12 point grid.
  gridTemplateColumns: '8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3% 8.3%',
  gridTemplateAreas:`
    '. . . . content content content content . . . .'
    '. . . . . footer footer . . . . .'
  `
});

export default function Layout({tweetList}) {
  return (
    <Wrapper>
      <Content>
        <TweetContainer tweetList={tweetList} />
      </Content>
      <Footer>
          <p>Made with <span style={{color: '#e25555'}}>&#9829;</span> by <a href="https://twitter.com/inacubicle">@inacubicle</a></p>
        </Footer>
    </Wrapper>
  );
}
