import { Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Navbar, NavbarProps } from '@ui/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'reponsive',
    },
  },
};

export const Main: Story<NavbarProps> = () => <Navbar />;

export const Mobile: Story<NavbarProps> = () => <Navbar />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
