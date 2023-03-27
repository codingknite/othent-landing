import { FeatureCard } from '../Cards/index';
import { FeaturesContainer, FeatureHeaderText } from '../common';

const WhyOthent = () => {
  return (
    <FeaturesContainer>
      <p className='why-othent'> Why [TBD]?</p>
      <FeatureHeaderText>Security matters to us</FeatureHeaderText>

      <div>
        <FeatureCard
          title='No seed phrases required'
          text='Say goodbye to the hassle of managing a seed phrase.'
          imgsrc='/world-connection.svg'
        />
        <FeatureCard
          title='Native social recovery'
          text='Setup social recovery with multiple trusted individuals in case of emergency.'
          imgsrc='/diversity.svg'
        />
        <FeatureCard
          title='Use existing 2FA'
          text='Add an extra layer of security through a second form of authentication.'
          imgsrc='/auth.svg'
        />
      </div>
    </FeaturesContainer>
  );
};

export default WhyOthent;
