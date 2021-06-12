import React from 'react';
import { Story } from '@storybook/react';
import { Navbar, NavbarProps } from '@ui/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Main: Story<NavbarProps> = () => <Navbar />;

export const Mobile: Story<NavbarProps> = () => (
  <div style={{ width: '508px' }}>
    <Navbar />
  </div>
);
