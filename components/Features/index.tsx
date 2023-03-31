import { FeatureCard } from '../Cards/';
import {
  FeatureHeaderText,
  FeaturesContainer,
  FeatureTextSmall,
} from '../common';

interface Props {
  type: 'mission' | 'simplicity';
  textSmall: string;
  headerText: string;
}

const Features = (props: Props) => {
  return (
    <FeaturesContainer>
      <FeatureTextSmall>{props.textSmall}</FeatureTextSmall>
      <FeatureHeaderText>{props.headerText}</FeatureHeaderText>

      {props.type === 'mission' ? (
        <div>
          <FeatureCard
            title='Onboard the masses'
            text='Othent allows web3 dApps and protocols to seamlessly access web2 users.'
            imgsrc='/world-connect.svg'
          />
          <FeatureCard
            title='Compatible'
            text='Use our protocol on any device or browser without browser extensions or plugins.'
            imgsrc='/smartphone.svg'
          />
          <FeatureCard
            title='Accessible'
            text='Our web2 backed protocol is able to reach a wider audience and scale more effectively.'
            imgsrc='/globe.svg'
          />
        </div>
      ) : (
        <div>
          <FeatureCard
            title='Smart contract wallets'
            text='Othent uses JSON Web Tokens paired with smart contracts, <span>no need for private keys.</span>'
            imgsrc='/files.svg'
          />
          <FeatureCard
            title='(Anti) social recovery'
            text='Use our protocol on any device or browser without browser extensions or plugins.'
            imgsrc='/phone-notif.svg'
          />
          <FeatureCard
            title='Use existing 2FA'
            text='Add an extra layer of security through a second form of authentication.'
            imgsrc='/2fa.svg'
          />
        </div>
      )}
    </FeaturesContainer>
  );
};

export default Features;
