import { Component } from 'react';
import Image from 'next/image';

export type VideoProps = {};
type VideoStates = {};

export class Video extends Component<VideoProps, VideoStates> {
  constructor(props: VideoProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Image
          src="/temp-thumbnails/data2020-ep16"
          alt={'Video Title'}
          width={256}
          height={254}
        />
      </div>
    );
  }
}
