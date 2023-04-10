import * as Styled from './styles';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';

const HeroSection = () => {
  return (
    <Styled.HeroSection>
      <h2 className={SpaceGrotesk700.className}>
        Merging Web2 to Web3 user logins with a familiar and simple interface
      </h2>

      <Styled.Tagline className={DMSans700.className}>
        Blockchain transactions with existing traditional social logins,{' '}
        <Styled.SocialLogins>
          like{' '}
          <div className='items-container'>
            <span className='discord'>Discord</span>
            <span className='special'>
              <img src='/figma.svg' alt='figma' />
            </span>
            <span className='dribble'>Dribble</span>
            <span className='special'>
              <img src='/slack.svg' alt='slack' />
            </span>
            <span className='twitch'>Twitch</span>
            <span className='spotify'>Spotify</span>
            <span className='vimeo'>Vimeo</span>
            <span className='special'>
              <img src='/google.svg' alt='google' />
            </span>
            <span className='facebook'>Facebook</span>
            <span className='apple'>Apple</span>
            <span className='special'>
              <img src='/microsoft.svg' alt='microsoft' />
            </span>
            <span className='linkedin'>LinkedIn</span>
            <span className='github'>Github</span>
            <span className='dropbox'>Dropbox</span>
            <span className='yahoo'>Yahoo</span>
            <span className='paypal'>Paypal</span>
            <span className='amazon'>Amazon</span>
            <span className='twitter'>Twitter</span>
          </div>
        </Styled.SocialLogins>
      </Styled.Tagline>

      <Styled.ButtonsWrapper>
        <Styled.Button getStarted className={DMSans700.className}>
          Get Started
        </Styled.Button>
        <Styled.Button className={DMSans700.className}>Demo</Styled.Button>
      </Styled.ButtonsWrapper>
    </Styled.HeroSection>
  );
};

export default HeroSection;
