import React from 'react';
import { Story } from '@storybook/react';
import { Footer, FooterProps } from '@ui/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

export const Main: Story<FooterProps> = () => <Footer />;

export const Mobile: Story<FooterProps> = () => (
  <div style={{ width: '508px' }}>
    <Footer />
  </div>
);
