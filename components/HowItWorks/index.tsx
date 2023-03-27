import * as Styled from './styles';
import { FeatureHeaderText } from '../common';

const HowItWorks = () => {
  return (
    <Styled.Container>
      <p className='mini-header'>How does it work?</p>
      <FeatureHeaderText>
        A simple process backed by the power of the permaweb on the Arweave
        blockchain
      </FeatureHeaderText>

      <img src='/works-mobile.svg' alt='' className='works-mobile' />
      <img src='/works-desktop.svg' alt='' className='works-desktop' />
      <div></div>
    </Styled.Container>
  );
};

export default HowItWorks;
