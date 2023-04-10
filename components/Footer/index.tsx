import * as Styled from './styles';
import { DMSans700, SpaceGrotesk600, SpaceGrotesk500 } from '../../utils/fonts';

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.CLabs>
        <img src='/logo.svg' alt='CLABS LOGO' />
        <div>
          <img src='/clabs-logo.svg' alt='CLABS LOGO' className='clabs-logo' />
          <p className={`${SpaceGrotesk600.className} inc`}>
            Working with <span>Community Labs</span>
          </p>
        </div>
      </Styled.CLabs>

      <Styled.FooterItems>
        <ul>
          <p className={SpaceGrotesk600.className}>Resources</p>
          <li className={SpaceGrotesk500.className}>SDKs</li>
          <li className={SpaceGrotesk500.className}>Documentation</li>
          <li className={SpaceGrotesk500.className}>Media Kit</li>
        </ul>

        <ul>
          <p className={SpaceGrotesk600.className}>Company</p>
          <li className={SpaceGrotesk500.className}>Blog</li>
          <li className={SpaceGrotesk500.className}>Careers</li>
        </ul>

        <ul>
          <p className={SpaceGrotesk600.className}>Legal</p>
          <li className={SpaceGrotesk500.className}>Terms of Service</li>
          <li className={SpaceGrotesk500.className}>All rights reserved</li>
          <li className={SpaceGrotesk500.className}>Copyright © 2023</li>
        </ul>

        <Styled.SocialChannels>
          <p className={SpaceGrotesk600.className}>Follow us</p>
          <li className={SpaceGrotesk500.className}>
            <img src='/discord-gray.svg' alt='discord icon' />
            Discord
          </li>
          <li className={SpaceGrotesk500.className}>
            <img src='/github-icon.svg' alt='github icon' />
            Github
          </li>
          <li className={SpaceGrotesk500.className}>
            <img src='/twitter-icon.svg' alt='twitter icon' />
            Twitter
          </li>
        </Styled.SocialChannels>
      </Styled.FooterItems>
    </Styled.Container>
  );
};

export default Footer;
