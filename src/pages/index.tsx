import Head from 'next/head';

import { Navbar } from '@ui/Navbar';

import LogoWhite from '@public/brand/logo-white.svg';
import DiscordIcon from '@public/icons/discord.svg';
import FacebookIcon from '@public/icons/facebook.svg';
import GithubIcon from '@public/icons/github.svg';
import LbryIcon from '@public/icons/lbry.svg';
import PatreonIcon from '@public/icons/patreon.svg';
import TwitchIcon from '@public/icons/twitch.svg';
import TwitterIcon from '@public/icons/twitter.svg';
import YoutubeIcon from '@public/icons/youtube.svg';

export default function Home() {
  const iconContainerClasses = 'flex justify-center items-center';
  const iconContainerMargin = '20';
  const iconClasses = 'w-11';
  const iconSpreadX = '30';
  const iconSpreadY = '26';
  const iconSpreadPair = '16';

  return (
    <div>
      <Head>
        <title>Carberra Tutorials</title>
        <meta name="description" content="The home of Carberra Tutorials" />
      </Head>
      <Navbar />
      <div className="bg-black h-screen-navbar">
        <div className="absolute w-full h-full top-0 left-0 table">
          <div className="table-cell align-middle">
            <div className="w-min ml-auto mr-auto">
              <div
                className={iconContainerClasses + ' mb-' + iconContainerMargin}
              >
                <a
                  href="https://github.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    'relative right-' + iconSpreadX + ' top-' + iconSpreadY
                  }
                >
                  <GithubIcon className={iconClasses} />
                </a>
                <a
                  href="https://discord.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'relative right-' + iconSpreadPair}
                >
                  <DiscordIcon className={iconClasses} />
                </a>
                <a
                  href="https://youtube.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'relative left-' + iconSpreadPair}
                >
                  <YoutubeIcon className={iconClasses} />
                </a>
                <a
                  href="https://twitch.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    'relative left-' + iconSpreadX + ' top-' + iconSpreadY
                  }
                >
                  <TwitchIcon className={iconClasses} />
                </a>
              </div>
              <LogoWhite className="w-44" />
              <div
                className={iconContainerClasses + ' mt-' + iconContainerMargin}
              >
                <a
                  href="https://lbry.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    'relative right-' + iconSpreadX + ' bottom-' + iconSpreadY
                  }
                >
                  <LbryIcon className={iconClasses} />
                </a>
                <a
                  href="https://twitter.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'relative right-' + iconSpreadPair}
                >
                  <TwitterIcon className={iconClasses} />
                </a>
                <a
                  href="https://facebook.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'relative left-' + iconSpreadPair}
                >
                  <FacebookIcon className={iconClasses} />
                </a>
                <a
                  href="https://patreon.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    'relative left-' + iconSpreadX + ' bottom-' + iconSpreadY
                  }
                >
                  <PatreonIcon className={iconClasses} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-14">
          <h2 className="text-white font-brand lowercase text-center text-xl px-8">
            Scroll down to see videos
          </h2>
        </div>
      </div>
    </div>
  );
}
