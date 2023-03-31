import * as Styled from './styles';
import { FeatureTextSmall, FeatureHeaderText } from '../common';

const SDKSection = () => {
  return (
    <Styled.container>
      <FeatureTextSmall>Bring dApp’s from 0 to 1</FeatureTextSmall>
      <Styled.HeaderText>Builders, get started in seconds</Styled.HeaderText>

      <Styled.Onboard>
        <p className='try-out'>Try it out!</p>
        <p className='onboard-users'>Onboard users to:</p>

        <Styled.IconsContainer>
          <div>
            <img src='/link-icon.svg' alt='link icon' />
            <p>Chains</p>
          </div>
          <div>
            <img src='/code-icon.svg' alt='link icon' />
            <p>dApps</p>
          </div>
          <div>
            <img src='/wallet-icon.svg' alt='link icon' />
            <p>Wallets</p>
          </div>
        </Styled.IconsContainer>

        <Styled.Button href='/' className='read-docs'>
          <p>Explore the SDK</p>
          <span>
            <img src='/arrow-icon.svg' alt='arrow icon' />
          </span>
        </Styled.Button>

        <img src='/code.svg' alt='code snippet' className='code-snippet' />
      </Styled.Onboard>
    </Styled.container>
  );
};

export default SDKSection;
