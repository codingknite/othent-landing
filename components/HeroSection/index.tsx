import * as Styled from './styles';

const HeroSection = () => {
  return (
    <Styled.HeroSection>
      <h2>
        Merging Web2 to Web3 user logins with a familiar and simple interface
      </h2>
      <p>
        Blockchain transactions with existing traditional social logins,{' '}
        <span className='init-span'>
          like <span>Discord</span>
        </span>
      </p>

      <button className='get-started'>Get Started</button>
      <button className='demo'>Demo</button>
    </Styled.HeroSection>
  );
};

export default HeroSection;
