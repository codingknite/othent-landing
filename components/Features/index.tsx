import FeatureCard from '../Cards/FeatureCard';

import {
  FeatureHeaderText,
  FeaturesContainer,
  FeatureTextSmall,
} from '../common';
import * as Styled from './styles';
import * as CardStyled from '../Cards/FeatureCard/styles';
import { DMSans700, SpaceGrotesk700 } from '../../utils/fonts';

interface Props {
  type: 'mission' | 'simplicity';
  textSmall: string;
  headerText: string;
}

const Features = (props: Props) => {
  return (
    <FeaturesContainer mission={props.type}>
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
          <CardStyled.Container img='/files.svg'>
            <div>
              <img src='/files.svg' alt='illustration' />
            </div>

            <CardStyled.Title className={SpaceGrotesk700.className}>
              Smart contract wallets
            </CardStyled.Title>
            <CardStyled.Text className={DMSans700.className}>
              Othent uses JSON Web Tokens paired with smart contracts,{' '}
              <span>no need for private keys.</span>
            </CardStyled.Text>
          </CardStyled.Container>

          <CardStyled.Container img='/phone-notif.svg'>
            <div>
              <img src='/phone-notif.svg' alt='illustration' />
            </div>

            <CardStyled.Title className={SpaceGrotesk700.className}>
              (Anti) social recovery
            </CardStyled.Title>
            <CardStyled.Text className={DMSans700.className}>
              Enable <span>recovery of your wallet</span> through social or
              traditional web3 wallet methods.
            </CardStyled.Text>
          </CardStyled.Container>

          <CardStyled.Container img='/2fa.svg'>
            <div>
              <img src='/2fa.svg' alt='illustration' />
            </div>

            <CardStyled.Title className={SpaceGrotesk700.className}>
              Use existing 2FA
            </CardStyled.Title>
            <CardStyled.Text className={DMSans700.className}>
              Add an <span>extra layer of security</span> through a second form
              of authentication.
            </CardStyled.Text>
          </CardStyled.Container>
        </Styled.CardsContainer>
      )}
    </FeaturesContainer>
  );
};

export default Features;
