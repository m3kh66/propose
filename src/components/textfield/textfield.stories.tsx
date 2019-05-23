import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';
import { ThemeProvider } from 'styled-components';
import { Default } from '../../themes';

storiesOf('TextField', module)
  .add('Text', () => (
    <ThemeProvider theme={Default}>
      <TextField title="Text" />
    </ThemeProvider>
  ))
  .add('Number', () => (
    <ThemeProvider theme={Default}>
      <TextField title="Number" type="number" />
    </ThemeProvider>
  ))
  .add('Password', () => (
    <ThemeProvider theme={Default}>
      <TextField title="Password" type="password" />
    </ThemeProvider>
  ));
