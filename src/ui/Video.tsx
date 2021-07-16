import { Component, HTMLAttributes } from 'react';
import Image from 'next/image';

const videoSide = {
  left: 'justify-end',
  right: 'justify-start',
};

export type VideoProps = HTMLAttributes<HTMLElement> & {
  side?: keyof typeof videoSide;
};
type VideoStates = {
  videoTitle: string;
  videoThumbnail: string;
  videoUrl: string;
};

export class Video extends Component<VideoProps, VideoStates> {
  static defaultProps = {
    side: 'left',
  };

  constructor(props: VideoProps) {
    super(props);
    this.state = {
      videoTitle:
        'K-Means clustering - Data analysis and visualisation in Python - Part 16',
      videoThumbnail: '/temp-thumbnails/data2021-ep16.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=OVpNX-LgHgY',
    };
  }

  renderVideoInfo = (extraClasses: string) => {
    return (
      <h1 className={`text-2xl text-white font-brand ${extraClasses}`}>
        Video info
      </h1>
    );
  };

  render() {
    const spaceFromCenter = 24;

    return (
      <div className={`block md:flex ${this.props.className}`}>
        {this.props.side === 'right' ? (
          <div className="hidden w-full md:block jusify-end md:pr-16 lg:pr-24">
            {this.renderVideoInfo('text-right')}
          </div>
        ) : null}
        <div
          className={`flex justify-center md:${
            videoSide[this.props.side!]
          } w-full lg:p${this.props.side === 'left' ? 'r' : 'l'}-24 md:p${
            this.props.side === 'left' ? 'r' : 'l'
          }-16`}
        >
          <div className="inline-flex">
            <a
              href={this.state.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={this.state.videoThumbnail}
                alt={this.state.videoTitle}
                width={320}
                height={180}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
        {this.props.side === 'left' ? (
          <div className="hidden w-full md:flex justify-start md:pl-16 lg:pl-24">
            {this.renderVideoInfo('')}
          </div>
        ) : null}
        <div className="flex justify-center md:hidden pt-6">
          {this.renderVideoInfo('')}
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute w-full left-0 flex justify-center">
            <div className="hidden md:block w-16 border-b-4 border-white"></div>
          </div>
        </div>
      </div>
    );
  }
}
