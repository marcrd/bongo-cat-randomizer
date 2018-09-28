import React from 'react';
import styled from 'react-emotion';

const Tag = styled.span({
  color: '#057CFF'
});

export default function Tags({tags}) {
  return (
    <p>
      {tags.map((tag) => {
        return <Tag>{`#${tag} `}</Tag>;
      })}
    </p>
  );
}
