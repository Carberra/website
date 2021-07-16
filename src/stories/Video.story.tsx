import { Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Video, VideoProps } from '@ui/Video';

export default {
  title: 'Video',
  argTypes: {
    side: { control: { type: 'inline-radio', options: ['left', 'right'] } },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'reponsive',
    },
  },
};

export const Main: Story<VideoProps> = ({ ...props }) => <Video {...props} />;

export const Mobile: Story<VideoProps> = ({ ...props }) => (
  <div className="mx-auto">
    <Video {...props} />
  </div>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
