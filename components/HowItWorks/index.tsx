import * as Styled from './styles';
import { FeatureTextSmall, LinkButton } from '../common';

const HowItWorks = () => {
  return (
    <Styled.Container>
      <FeatureTextSmall>How?</FeatureTextSmall>
      <Styled.HeaderText>
        A simple process backed by the power of the permaweb on the Arweave
        blockchain
      </Styled.HeaderText>

      <a href='/' className='read-docs'>
        <p>Read the docs</p>
        <span>
          <img src='/arrow-icon.svg' alt='arrow icon' />
        </span>
      </a>

      <img src='/works-mobile.svg' alt='' className='works-mobile' />
      <img src='/works-desktop.svg' alt='' className='works-desktop' />
      <div></div>
    </Styled.Container>
  );
};

export default HowItWorks;
