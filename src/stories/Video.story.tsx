import { Story } from '@storybook/react';
import { Video, VideoProps } from '@ui/Video';

export default {
  title: 'Video',
  argTypes: {
    side: { control: { type: 'inline-radio', options: ['left', 'right'] } },
  },
};

export const Main: Story<VideoProps> = ({ ...props }) => <Video {...props} />;
