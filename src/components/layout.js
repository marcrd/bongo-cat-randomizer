import React from 'react';
import styled from 'react-emotion';
import TweetContainer from './tweet_container';

const Footer = styled.div({
  gridArea: 'footer'
});

const Content = styled.div({
  gridArea: 'content'
});

const Wrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '300px 200px 200px 50px',
  gridTemplateAreas:`
    '. content content .'
    '. footer footer .'
  `
});

export default function Layout({tweetList}) {
  return (
    <Wrapper>
      <Content>
        <TweetContainer tweetList={tweetList} />
      </Content>
      <Footer>
        <p>Made with love by @inacubicle</p>
      </Footer>
    </Wrapper>
  );
}
