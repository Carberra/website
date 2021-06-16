import { Component } from 'react';

export type VideoProps = {};
type VideoStates = {};

export class Video extends Component<VideoProps, VideoStates> {
  constructor(props: VideoProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div></div>;
  }
}
