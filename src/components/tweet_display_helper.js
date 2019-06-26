import React from 'react';

export default function TweetDisplayHelper({tweet}) {
  return (
    <pre>
      <p> Name: {tweet.name} </p>
      <p> String: {tweet.id} </p>
      <p> Tags: {tweet.tags.map(tag => <span> {tag} </span>)} </p>
    </pre>
  );
}
