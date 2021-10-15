import Head from 'next/head';
import { Component } from 'react';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { Video } from '@ui/Video';

import LogoWhite from '@public/brand/logo-white.svg';
import DiscordIcon from '@public/icons/discord.svg';
import InstagramIcon from '@public/icons/instagram.svg';
import GithubIcon from '@public/icons/github.svg';
import LbryIcon from '@public/icons/lbry.svg';
import PatreonIcon from '@public/icons/patreon.svg';
import TwitchIcon from '@public/icons/twitch.svg';
import TwitterIcon from '@public/icons/twitter.svg';
import YoutubeIcon from '@public/icons/youtube.svg';

type Props = {};
type States = {
  logoClicked: number;
  logoTargetClicks: number;
  scrollDownText: string;
  scrollTextFade: string;
  logoWhiteData: boolean;
};

export default class Home extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    let targetClicks = Math.floor(Math.random() * (15 - 8) + 8);

    this.state = {
      logoClicked: 0,
      logoTargetClicks: targetClicks,
      scrollDownText: '',
      scrollTextFade: '',
      logoWhiteData: false,
    };
  }

  componentDidMount() {
    this.resizeCenterLine();
    window.addEventListener('resize', this.resizeCenterLine);
  }

  resizeCenterLine = () => {
    let container = document.getElementById(
      'contentSectionContainer'
    ) as HTMLDivElement;
    let line = document.getElementById(
      'contentSectionCenterLine'
    ) as HTMLDivElement;
    let footer = document.getElementById('footer') as HTMLDivElement;

    if (!container || !line || !footer) return;

    line.style.height = `${container.offsetHeight + footer.offsetHeight}px`;
  };

  handleLogoClick = () => {
    this.setState({ logoClicked: this.state.logoClicked + 1 });

    if (this.state.logoClicked !== this.state.logoTargetClicks) return;

    this.setState({ scrollTextFade: 'opacity-0' });
    setTimeout(() => {
      this.setState({
        scrollDownText: 'Jax is cute',
        scrollTextFade: 'opacity-1',
      });
    }, 250);
  };

  renderPlatformsSection = () => {
    return (
      <div className="bg-brand-black h-screen-navbar">
        <div className="absolute w-full h-full top-0 left-0 table">
          <div className="table-cell align-middle">
            <div className="w-min mx-auto">
              <div className="flex justify-center items-center mb-10 xs:mb-20">
                <a
                  href="https://github.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative right-16 xs:right-30 top-16 xs:top-26"
                >
                  <GithubIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://discord.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative right-9 xs:right-16"
                >
                  <DiscordIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://youtube.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative left-9 xs:left-16"
                >
                  <YoutubeIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://twitch.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative left-16 xs:left-30 top-16 xs:top-26"
                >
                  <TwitchIcon className="w-10 xs:w-11" />
                </a>
              </div>

              <svg
                className="w-0 h-0 absolute"
                aria-hidden="true"
                focusable="false"
              >
                <linearGradient id="brand-logo-gradient" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9e1cf3" />
                  <stop offset="3%" stopColor="#9e1cf3" />
                  <stop offset="85%" stopColor="#1987bd" />
                  <stop offset="100%" stopColor="#1987bd" />
                </linearGradient>
              </svg>
              <LogoWhite
                className="w-32 xs:w-44 mx-auto bg-brand-logo-gradient absolute"
                onClick={this.handleLogoClick}
                onMouseEnter={() => this.setState({ logoWhiteData: true })}
                onMouseLeave={() => this.setState({ logoWhiteData: false })}
                id="logoGrad"
              />
              <LogoWhite
                className="w-32 xs:w-44 mx-auto"
                data-hide={this.state.logoWhiteData}
                id="logoWhite"
              />

              <div className="flex justify-center items-center mt-10 xs:mt-20">
                <a
                  href="https://lbry.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative right-16 xs:right-30 bottom-16 xs:bottom-26"
                >
                  <LbryIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://twitter.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative right-9 xs:right-16"
                >
                  <TwitterIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://instagram.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative left-9 xs:left-16"
                >
                  <InstagramIcon className="w-10 xs:w-11" />
                </a>
                <a
                  href="https://patreon.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative left-16 xs:left-30 bottom-16 xs:bottom-26"
                >
                  <PatreonIcon className="w-10 xs:w-11" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-0">
          <div className="absolute w-full bottom-10 md:bottom-20">
            <h2
              className={
                'text-white font-brand lowercase text-center text-xl px-8 transition duration-400 ease-in-out lowercase ' +
                this.state.scrollTextFade
              }
            >
              {this.state.scrollDownText}
            </h2>
          </div>
          <Footer id="footer" className="hidden md:block" />
        </div>
      </div>
    );
  };

  renderContentSection = () => {
    return (
      <div className="h-full bg-brand-black" id="contentSectionContainer">
        <div className="border-b-4 border-white">
          <div
            className="absolute w-full left-0 flex justify-center"
            id="contentSectionCenterLine"
          >
            <div className="hidden md:flex w-0 h-full border-r-4 border-white"></div>
          </div>
          <div className="w-9/12 mx-auto pt-20 pb-16 relative z-10 bg-brand-black">
            <h1 className="font-brand text-white text-2xl text-center">
              Stream info
            </h1>
          </div>
        </div>
        <div className="w-10/12 lg:9/12 xl:w-8/12 mx-auto pt-16">
          <Video side="left" />
          <Video side="right" className="mt-10 md:mt-16" />
          <Video side="left" className="mt-10 md:mt-16 pb-20" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Head>
          <title>Carberra Tutorials</title>
          <meta name="description" content="The home of Carberra Tutorials" />
        </Head>
        <Navbar className="z-10" />
        {this.renderPlatformsSection()}
        <Footer id="footer" className="block md:hidden" />
      </div>
    );
  }
}
