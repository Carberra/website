import { Component } from 'react';
import Image from 'next/image';

export type VideoProps = {};
type VideoStates = {
  videoTitle: string;
  videoThumbnail: string;
  videoUrl: string;
};

export class Video extends Component<VideoProps, VideoStates> {
  constructor(props: VideoProps) {
    super(props);
    this.state = {
      videoTitle:
        'K-Means clustering - Data analysis and visualisation in Python - Part 16',
      videoThumbnail: '/temp-thumbnails/data2021-ep16.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=OVpNX-LgHgY',
    };
  }

  render() {
    return (
      <div className="inline-flex">
        <a href={this.state.videoUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={this.state.videoThumbnail}
            alt={this.state.videoTitle}
            width={320}
            height={180}
            className="cursor-pointer"
          />
        </a>
      </div>
    );
  }
}
