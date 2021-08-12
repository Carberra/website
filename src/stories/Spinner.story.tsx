import { Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Spinner, SpinnerProps } from '@ui/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'reponsive',
    },
  },
};

export const Main: Story<SpinnerProps> = () => <Spinner />;

export const Mobile: Story<SpinnerProps> = () => <Spinner />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
