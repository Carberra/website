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
  const iconClasses = 'w-11 relative';
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
                >
                  <GithubIcon
                    className={
                      iconClasses +
                      ' right-' +
                      iconSpreadX +
                      ' top-' +
                      iconSpreadY
                    }
                  />
                </a>
                <a
                  href="https://discord.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon
                    className={iconClasses + ' right-' + iconSpreadPair}
                  />
                </a>
                <a
                  href="https://youtube.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon
                    className={iconClasses + ' left-' + iconSpreadPair}
                  />
                </a>
                <a
                  href="https://twitch.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitchIcon
                    className={
                      iconClasses +
                      ' left-' +
                      iconSpreadX +
                      ' top-' +
                      iconSpreadY
                    }
                  />
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
                >
                  <LbryIcon
                    className={
                      iconClasses +
                      ' right-' +
                      iconSpreadX +
                      ' bottom-' +
                      iconSpreadY
                    }
                  />
                </a>
                <a
                  href="https://twitter.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon
                    className={iconClasses + ' right-' + iconSpreadPair}
                  />
                </a>
                <a
                  href="https://facebook.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    className={iconClasses + ' left-' + iconSpreadPair}
                  />
                </a>
                <a
                  href="https://patreon.carberra.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PatreonIcon
                    className={
                      iconClasses +
                      ' left-' +
                      iconSpreadX +
                      ' bottom-' +
                      iconSpreadY
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
