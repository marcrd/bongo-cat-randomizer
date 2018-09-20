import React from 'react';
import { storiesOf } from '@storybook/react';
import RandomizeButton from './components/randomize_button'

storiesOf('Components', module)
  .add('Randomize Me Button', () => (
    <RandomizeButton></RandomizeButton>
  ));
