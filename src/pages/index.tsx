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
                <GithubIcon
                  className={
                    iconClasses +
                    ' right-' +
                    iconSpreadX +
                    ' top-' +
                    iconSpreadY
                  }
                />
                <DiscordIcon
                  className={iconClasses + ' right-' + iconSpreadPair}
                />
                <YoutubeIcon
                  className={iconClasses + ' left-' + iconSpreadPair}
                />
                <TwitchIcon
                  className={
                    iconClasses + ' left-' + iconSpreadX + ' top-' + iconSpreadY
                  }
                />
              </div>
              <LogoWhite className="w-44" />
              <div
                className={iconContainerClasses + ' mt-' + iconContainerMargin}
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
                <TwitterIcon
                  className={iconClasses + ' right-' + iconSpreadPair}
                />
                <FacebookIcon
                  className={iconClasses + ' left-' + iconSpreadPair}
                />
                <PatreonIcon
                  className={
                    iconClasses +
                    ' left-' +
                    iconSpreadX +
                    ' bottom-' +
                    iconSpreadY
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
