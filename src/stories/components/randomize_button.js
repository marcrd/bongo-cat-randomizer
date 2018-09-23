import React, {Component} from 'react';

function randomizeTweetList(tweetList) {
  return tweetList[Math.floor(Math.random() * tweetList.length)]
}

class RandomizeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      getTweet
    } = this.props;

    return (
      <button onClick={() => getTweet(randomizeTweetList(tweetList))}>
        Bongo Me Baby
      </button>
    );
  }
};

export default RandomizeButton;

const tweetList = [
  '1041945336866983936',
  '1042117095260139520',
  '1042141269672243200',
  '1042140031429824517',
  '1041426791921930240',
  '1041421444431982593',
  '1041030750206873600',
  '1041136200914952193',
  '1040673002680188928',
  '1041382878528061440',
  '1040727049441296385',
  '1041007925425258496',
  '1040934898197061632',
  '1040596319843172353',
  '1040033891703300096',
  '1040226240920055808',
  '1039758897517604864'
];
