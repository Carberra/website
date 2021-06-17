import { Story } from '@storybook/react';
import { Video, VideoProps } from '@ui/Video';

export default {
  title: 'Video',
  component: Video,
};

export const Main: Story<VideoProps> = () => <Video />;
