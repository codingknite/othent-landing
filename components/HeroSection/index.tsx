import * as Styled from './styles';

const HeroSection = () => {
  return (
    <Styled.HeroSection>
      <h2>
        Merging Web2 to Web3 user logins with a familiar and simple interface
      </h2>

      <div className='tagline'>
        Blockchain transactions with existing traditional social logins,{' '}
        <Styled.Socials>
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
        </Styled.Socials>
      </div>

      <button className='get-started'>Get Started</button>
      <button className='demo'>Demo</button>
    </Styled.HeroSection>
  );
};

export default HeroSection;
