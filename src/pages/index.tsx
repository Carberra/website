import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

import DiscordIcon from '@public/assets/icons/discord.svg';
import GithubIcon from '@public/assets/icons/github.svg';
import PatreonIcon from '@public/assets/icons/patreon.svg';
import YoutubeIcon from '@public/assets/icons/youtube.svg';

import WordmarkWhite from '@public/brand/wordmark/wordmark-white.svg';
import WordmarkTrail from '@public/brand/wordmark/wordmark-trail.svg';

import Arrow from '@public/assets/graphics/arrow.svg';

import styles from '@styles/modules/Home.module.scss';

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
      scrollDownText: '',
      scrollTextFade: '',
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

  particlesInit = async (main: any) => {
    await loadFull(main);
  };

  render() {
    return (
      <div>
        <Head>
          <title>Carberra Tutorials</title>
          <meta name="description" content="The home of Carberra Tutorials" />
        </Head>
        <div className="flex flex-col min-h-screen overflow-hidden bg-brand-black">
          <Navbar />

          <Particles
            init={this.particlesInit}
            className="absolute w-full h-full top-0 left-0"
            options={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                },
                color: {
                  value: '#D0D0D0',
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000',
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 0.1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#D0D0D0',
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                  onclick: {
                    enable: true,
                    mode: 'push',
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />

          <div className="grow flex">
            <div className="self-stretch w-full flex flex-col md:flex-row items-center justify-around md:justify-start mb-4 mt-16 md:mt-0">
              <div className="flex items-center mb-12 md:mb-0 md:ml-20 transform md:origin-left scale-[0.4] 2xs:scale-50 sm:scale-75 md:scale-50 lg:scale-75 xl:scale-100 md:w-md lg:w-lg xl:w-auto">
                <div>
                  <div className="p-0 m-0 " onClick={this.handleLogoClick}>
                    <WordmarkWhite className="p-0 m-0 ml-3 relative z-20" />
                    <WordmarkTrail
                      className={`p-0 m-0 mt-1 svg-fill-brand-blue relative z-10 ${styles.WordmarkAnimationBlue}`}
                    />
                    <WordmarkTrail
                      className={`p-0 m-0 svg-fill-brand-purple position relative z-10 bottom-2.5 ${styles.WordmarkAnimationPurple}`}
                    />
                  </div>
                  <div
                    className={`flex md:w-6/12 justify-around md:justify-between mx-6 mt-2 ${styles.IconAnimation} descendant-svg:h-14 2xs:descendant-svg:h-12 sm:descendant-svg:h-10 descendant-svg:relative descendant-svg:z-10`}
                  >
                    <a
                      href="https://discord.carberra.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DiscordIcon />
                    </a>
                    <a
                      href="https://github.carberra.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href="https://patreon.carberra.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PatreonIcon />
                    </a>
                    <a
                      href="https://youtube.carberra.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:flex md:justify-end w-full mb-8 md:mb-0">
                <div
                  className="md:bg-gradient-to-l md:from-brand-black md:via-brand-black md:h-screen-navbar w-full 2xl:w-7/12 md:ml-3 relative"
                  style={{ zIndex: 5 }}
                >
                  <div className="bg-gradient-to-r from-brand-purple to-brand-blue md:bg-brand-gradient-fade md:h-screen-navbar w-full relative z-10 flex justify-center md:justify-end items-center py-12 md:py-0">
                    <Link href="/series">
                      <span className="font-brand text-white uppercase text-xl sm:text-2xl lg:text-3xl mr-4 cursor-pointer">
                        Series
                      </span>
                    </Link>
                    <Link href="/series">
                      <Arrow className="relative z-20 md:mr-20 cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-full bottom-0">
              <div className="absolute w-full bottom-10 md:bottom-20">
                <h2
                  className={
                    'text-white font-sans text-center text-xl px-8 transition duration-800 ease-in-out relative z-10' +
                    this.state.scrollTextFade
                  }
                >
                  {this.state.scrollDownText}
                </h2>
              </div>
              <Footer id="footer" className="hidden md:block relative z-10" />
            </div>
          </div>
          <Footer id="footer" className="block md:hidden relative z-10" />
        </div>
      </div>
    );
  }
}
