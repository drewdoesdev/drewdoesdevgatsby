import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/styled/buttons/index.styled';

export default {
  title: 'Buttons',
  component: Button,
};

export const Primary = () => (
  <Fragment>
    <Button.Primary onClick={action('clicked')}>Hello Button</Button.Primary>
    <Button.Primary onClick={action('clicked')}>Hello Button</Button.Primary>
    </Fragment>
);


export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
