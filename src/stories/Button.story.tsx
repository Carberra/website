import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '@ui/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Main: Story<ButtonProps> = () => <Button>Testing123</Button>;
