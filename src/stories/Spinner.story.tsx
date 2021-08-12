import { Story } from '@storybook/react';
import { Spinner, SpinnerProps } from '@ui/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const Main: Story<SpinnerProps> = () => <Spinner />;
