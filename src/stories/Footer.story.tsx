import { Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Footer, FooterProps } from '@ui/Footer';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'reponsive',
    },
  },
};

export const Main: Story<FooterProps> = () => <Footer />;

export const Mobile: Story<FooterProps> = () => <Footer />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
