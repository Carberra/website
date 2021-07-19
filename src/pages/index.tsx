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
};

export default class Home extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    let targetClicks = Math.floor(Math.random() * (15 - 8) + 8);

    this.state = {
      logoClicked: 0,
      logoTargetClicks: targetClicks,
      scrollDownText: 'Scroll down to see videos',
      scrollTextFade: '',
    };
  }

  componentDidMount() {
    let container = document.getElementById(
      'contentSectionContainer'
    ) as HTMLDivElement;
    let line = document.getElementById(
      'contentSectionCenterLine'
    ) as HTMLDivElement;

    if (!container || !line) return;

    line.style.height = `${container.clientHeight}px`;
  }

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
    const iconContainerClasses = 'flex justify-center items-center';
    const iconClasses = 'w-10 xs:w-11';
    const iconContainerMargin = '20';
    const iconSpreadX = '30';
    const iconSpreadY = '26';
    const iconSpreadPair = '16';
    const iconContainerMarginSm = '10';
    const iconSpreadXSm = '16';
    const iconSpreadYSm = '16';
    const iconSpreadPairSm = '9';

    return (
      <div className="bg-black h-screen-navbar">
        <div className="absolute w-full h-full top-0 left-0 table">
          <div className="table-cell align-middle">
            <div className="w-min mx-auto">
              <div
                className={`${iconContainerClasses} mb-${iconContainerMarginSm} xs:mb-${iconContainerMargin}`}
              >
                <a
                  href="https://github.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative right-${iconSpreadXSm} xs:right-${iconSpreadX} top-${iconSpreadYSm} xs:top-${iconSpreadY}`}
                >
                  <GithubIcon className={iconClasses} />
                </a>
                <a
                  href="https://discord.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative right-${iconSpreadPairSm} xs:right-${iconSpreadPair}`}
                >
                  <DiscordIcon className={iconClasses} />
                </a>
                <a
                  href="https://youtube.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative left-${iconSpreadPairSm} xs:left-${iconSpreadPair}`}
                >
                  <YoutubeIcon className={iconClasses} />
                </a>
                <a
                  href="https://twitch.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative left-${iconSpreadXSm} xs:left-${iconSpreadX} top-${iconSpreadYSm} xs:top-${iconSpreadY}`}
                >
                  <TwitchIcon className={iconClasses} />
                </a>
              </div>
              <LogoWhite
                className="w-32 xs:w-44 mx-auto"
                onClick={this.handleLogoClick}
              />
              <div
                className={`${iconContainerClasses} mt-${iconContainerMarginSm} xs:mt-${iconContainerMargin}`}
              >
                <a
                  href="https://lbry.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative right-${iconSpreadXSm} xs:right-${iconSpreadX} bottom-${iconSpreadYSm} xs:bottom-${iconSpreadY}`}
                >
                  <LbryIcon className={iconClasses} />
                </a>
                <a
                  href="https://twitter.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative right-${iconSpreadPairSm} xs:right-${iconSpreadPair}`}
                >
                  <TwitterIcon className={iconClasses} />
                </a>
                <a
                  href="https://instagram.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative left-${iconSpreadPairSm} xs:left-${iconSpreadPair}`}
                >
                  <InstagramIcon className={iconClasses} />
                </a>
                <a
                  href="https://patreon.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative left-${iconSpreadXSm} xs:left-${iconSpreadX} bottom-${iconSpreadYSm} xs:bottom-${iconSpreadY}`}
                >
                  <PatreonIcon className={iconClasses} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-12 xs:bottom-14">
          <h2
            className={
              'text-white font-brand lowercase text-center text-xl px-8 transition duration-400 ease-in-out ' +
              this.state.scrollTextFade
            }
          >
            {this.state.scrollDownText}
          </h2>
        </div>
      </div>
    );
  };

  renderContentSection = () => {
    return (
      <div className="h-full bg-black" id="contentSectionContainer">
        <div className="border-b-4 border-white">
          <div
            className="absolute w-full left-0 flex justify-center"
            id="contentSectionCenterLine"
          >
            <div className="hidden md:flex w-0 h-full border-r-4 border-white"></div>
          </div>
          <div className="w-9/12 mx-auto pt-20 pb-16 relative z-10 bg-black">
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
        <Navbar />
        {this.renderPlatformsSection()}
        {this.renderContentSection()}
        <Footer />
      </div>
    );
  }
}
