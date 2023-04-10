import { FeatureCard } from '../Cards/';
import {
  FeatureHeaderText,
  FeaturesContainer,
  FeatureTextSmall,
} from '../common';
import * as Styled from './styles';
import { DMSans700, SpaceGrotesk700 } from '../../utils/fonts';

interface Props {
  type: 'mission' | 'simplicity';
  textSmall: string;
  headerText: string;
}

const Features = (props: Props) => {
  return (
    <FeaturesContainer mission>
      <FeatureTextSmall className={DMSans700.className}>
        {props.textSmall}
      </FeatureTextSmall>
      <FeatureHeaderText className={SpaceGrotesk700.className}>
        {props.headerText}
      </FeatureHeaderText>

      {props.type === 'mission' ? (
        <Styled.CardsContainer>
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
        </Styled.CardsContainer>
      ) : (
        <Styled.CardsContainer>
          <FeatureCard
            title='Smart contract wallets'
            text='Othent uses JSON Web Tokens paired with smart contracts, no need for private keys.'
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
        </Styled.CardsContainer>
      )}
    </FeaturesContainer>
  );
};

export default Features;
