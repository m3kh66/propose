import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title, NumberOfPerson } from './fields';
import { ThemeProvider } from 'styled-components';
import { Default } from '../themes';

storiesOf('Fields', module)
  .add('Title', () => (
    <ThemeProvider theme={Default}>
      <Title />
    </ThemeProvider>
  ))
  .add('NumberOfPerson', () => (
    <ThemeProvider theme={Default}>
      <NumberOfPerson />
    </ThemeProvider>
  ));