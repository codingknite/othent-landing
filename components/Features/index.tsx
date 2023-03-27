import { FeatureCard } from '../Cards/';
import { FeatureHeaderText, FeaturesContainer } from '../common';

const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureHeaderText>
        Our goal is to empower 4.2 Billion Web2 users with a robust gateway to
        web3
      </FeatureHeaderText>

      <div>
        <FeatureCard
          title='Compatible'
          text='User our protocol on any device or browser without browser
              extensions or plugins.'
          imgsrc='/smartphone.svg'
        />
        <FeatureCard
          title='Smart contract wallets'
          text='We use JSON Web Tokens paired with smart contracts, no need for private keys.'
          imgsrc='/hosting.svg'
        />
        <FeatureCard
          title='Accessible'
          text='Our web2 backed protocol is able to reach a wider audience and scale more effectively.'
          imgsrc='/world.svg'
        />
      </div>
    </FeaturesContainer>
  );
};

export default Features;
