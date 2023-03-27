import * as Styled from './styles';
import { SlideCard } from '../Cards/index';

const Security = () => {
  return (
    <Styled.Container>
      <p className='heading-1'>Easy, fast and secure...</p>
      <p className='heading-2'>
        From zero to crypto, <span>in just 1 click.</span>
      </p>

      <Styled.FeaturesContainer>
        <div className='tabs'>
          <p className='active'>Account</p>
          <p>Upload</p>
          <p>Sign</p>
        </div>

        <div className='info'>
          <p className='header'>Create an account</p>

          <p className='text'>
            Creating an account with us is easy and convenient – simply log in
            with your preferred social app.
          </p>

          <p className='text'>
            All you need to do is connect your social media account through our
            platform, and you'll be able to create a new account in just a few
            seconds.
          </p>

          <div className='select-signin'>
            <div className='bar'></div>
            <p>Select how you want to sign in</p>
            <div className='bar'></div>
          </div>

          <button>
            <div></div>
            Continue with [TBD]
          </button>

          <div className='cta'>
            <p>New to [TBD]?</p>
            <a href=''>Create an account</a>
          </div>
        </div>
      </Styled.FeaturesContainer>

      <SlideCard
        num={1}
        heading='Sign in'
        text='Users can easily sign in with their favorite social app through a OAuth login.'
      />
      <SlideCard
        num={2}
        heading='Make a transaction'
        text='Interact with Web3 applications seamlessly by making transactions through our platform.'
      />
      <SlideCard
        num={3}
        heading='Sign transactions'
        text='Users can quickly sign a transaction and authenticate their actions using their social app'
      />
    </Styled.Container>
  );
};

export default Security;
