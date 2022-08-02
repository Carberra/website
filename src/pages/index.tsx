import Head from 'next/head';
import { Component } from 'react';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

import DiscordIcon from '@public/icons/discord.svg';
import GithubIcon from '@public/icons/github.svg';
import PatreonIcon from '@public/icons/patreon.svg';
import YoutubeIcon from '@public/icons/youtube.svg';

import WordmarkWhite from '@public/brand/wordmark/wordmark-white.svg';
import WordmarkTrail from '@public/brand/wordmark/wordmark-trail.svg';

import styles from '@styles/modules/Home.module.scss';

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

  render() {
    return (
      <div>
        <Head>
          <title>Carberra Tutorials</title>
          <meta name="description" content="The home of Carberra Tutorials" />
        </Head>
        <div className="flex flex-col min-h-screen bg-brand-black">
          <Navbar className="z-10" />
          <div className="flex-grow flex items-center">
            <div className="ml-20">
              <div className="p-0 m-0" onClick={this.handleLogoClick}>
                <WordmarkWhite className="p-0 m-0 ml-3 relative z-10" />
                <WordmarkTrail
                  className={`p-0 m-0 mt-1 svg-fill-brand-blue ${styles.WordmarkAnimationBlue}`}
                />
                <WordmarkTrail
                  className={`p-0 m-0 svg-fill-brand-purple position relative bottom-1 ${styles.WordmarkAnimationPurple}`}
                />
              </div>
              <div
                className={`flex w-7/12 justify-around mt-2 ${styles.IconAnimation}`}
              >
                <a
                  href="https://discord.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon className="h-10" />
                </a>
                <a
                  href="https://github.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-10" />
                </a>
                <a
                  href="https://patreon.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PatreonIcon className="h-10" />
                </a>
                <a
                  href="https://youtube.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="h-10" />
                </a>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="bg-brand-gradient-fade h-screen-navbar w-7/12 ml-3"></div>
            </div>

            <div className="absolute w-full bottom-0">
              <div className="absolute w-full bottom-10 md:bottom-20">
                <h2
                  className={
                    'text-white font-sans text-center text-xl px-8 transition duration-800 ease-in-out' +
                    this.state.scrollTextFade
                  }
                >
                  {this.state.scrollDownText}
                </h2>
              </div>
              <Footer id="footer" className="hidden md:block" />
            </div>
          </div>
          <Footer id="footer" className="block md:hidden" />
        </div>
      </div>
    );
  }
}
