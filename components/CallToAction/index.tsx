import * as Styled from './styles';
import { FeatureHeaderText, LinkButton } from '../common';
import {
  SpaceGrotesk700,
  DMSans700,
  DMSans500,
  DMSans400,
} from '../../utils/fonts';

const CallToAction = () => {
  return (
    <Styled.Container>
      <Styled.HeaderText className={SpaceGrotesk700.className}>
        Start onboarding your users <span>from web2 to web3</span>
      </Styled.HeaderText>
      <Styled.ButtonsContainer>
        <Styled.Button primary className={DMSans700.className}>
          Get Started
        </Styled.Button>
        <Styled.JoinDiscord className={DMSans700.className}>
          <img src='/discord-colored.svg' alt='discord logo' />
          Join Discord
        </Styled.JoinDiscord>
      </Styled.ButtonsContainer>

      <Styled.MailboxContainer>
        <img src='/backdrop.svg' alt='mailbox' className='mailbox-img' />

        <Styled.CTATextContainer>
          <Styled.CTAHeader className={`${SpaceGrotesk700.className} test`}>
            Stay up to date
          </Styled.CTAHeader>
          <p className={`${DMSans400.className} mailbox-info`}>
            Stay up-to-date on all the latest information about new features,
            special offers, and more. Don't miss out on all the exciting things
            happening!
          </p>
          <Styled.MailButtonsWrapper>
            <input
              type='text'
              placeholder='no@spam.com'
              className={DMSans400.className}
            />
            <Styled.Button primary className={DMSans700.className}>
              Subscribe
            </Styled.Button>
          </Styled.MailButtonsWrapper>
        </Styled.CTATextContainer>
      </Styled.MailboxContainer>
    </Styled.Container>
  );
};

export default CallToAction;
