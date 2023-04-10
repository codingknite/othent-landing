import * as Styled from './styles';
import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';

const SDKSection = () => {
  return (
    <Styled.MainContainer>
      <FeatureTextSmall className={DMSans700.className}>
        Bring dApp’s from 0 to 1
      </FeatureTextSmall>
      <CustomHeaderText className={SpaceGrotesk700.className}>
        Builders, get started in seconds
      </CustomHeaderText>

      <Styled.OnboardContainer>
        <Styled.Onboard>
          <Styled.TextOne className={DMSans700.className}>
            Try it out!
          </Styled.TextOne>
          <Styled.TextTwo className={DMSans700.className}>
            Onboard users to:
          </Styled.TextTwo>

          <Styled.IconsContainer>
            <div>
              <img src='/link-icon.svg' alt='link icon' />
              <p className={DMSans700.className}>Chains</p>
            </div>
            <div>
              <img src='/code-icon.svg' alt='link icon' />
              <p className={DMSans700.className}>dApps</p>
            </div>
            <div>
              <img src='/wallet-icon.svg' alt='link icon' />
              <p className={DMSans700.className}>Wallets</p>
            </div>
          </Styled.IconsContainer>

          <Styled.Button>
            <p className={DMSans700.className}>Explore the SDK</p>
            <span>
              <img src='/arrow-icon.svg' alt='arrow icon' />
            </span>
          </Styled.Button>
        </Styled.Onboard>

        <Styled.CodeSnippet src='/code.svg' alt='code snippet' />
      </Styled.OnboardContainer>
    </Styled.MainContainer>
  );
};

export default SDKSection;
