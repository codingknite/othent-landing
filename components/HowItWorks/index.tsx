import * as Styled from './styles';
import { FeatureTextSmall } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';

export default function HowItWorks() {
  return (
    <Styled.Container>
      <FeatureTextSmall className={DMSans700.className}>How?</FeatureTextSmall>
      <Styled.HeaderText className={SpaceGrotesk700.className}>
        A simple process backed by the power of the permaweb on the Arweave
        blockchain
      </Styled.HeaderText>

      <Styled.ReadDocs href='/'>
        <p className={DMSans700.className}>Read the docs</p>
        <span>
          <img src='/arrow-icon.svg' alt='arrow icon' />
        </span>
      </Styled.ReadDocs>

      <img src='/works-mobile.svg' alt='' className='works-mobile' />
      <img src='/works-desktop.svg' alt='' className='works-desktop' />
    </Styled.Container>
  );
}
