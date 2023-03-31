import * as Styled from './styles';
import { FeatureHeaderText, LinkButton } from '../common';

const CallToAction = () => {
  return (
    <Styled.Container>
      <Styled.HeaderText>
        Start onboarding your users from web2 to web3
      </Styled.HeaderText>
      <button className='primary-btn'>Get Started</button>
      <Styled.JoinDiscord>
        <img src='/discord-colored.svg' alt='discord logo' />
        Join Discord
      </Styled.JoinDiscord>

      <img src='/backdrop.svg' alt='mailbox' className='mailbox' />

      <FeatureHeaderText className='test'>Stay up to date</FeatureHeaderText>
      <p className='mailbox-info'>
        Stay up-to-date on all the latest information about new features,
        special offers, and more. Don't miss out on all the exciting things
        happening!
      </p>
      <input type='text' placeholder='no@spam.com' />
      <button className='primary-btn'>Subscribe</button>
    </Styled.Container>
  );
};

export default CallToAction;
