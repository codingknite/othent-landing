import styled from 'styled-components';

interface FeaturesContainerProps {
  mission?: boolean;
}

export const HeroSectionWrapper = styled.div`
  top: 4.35rem;
  display: flex;
  position: relative;
  flex-direction: column;

  @media (min-width: 550px) {
    gap: 1.5rem;
    padding: 1.25rem;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1100px) {
    justify-content: space-evenly;
  }
`;

export const DemoGif = styled.div`
  img {
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 550px) {
    width: 35%;
  }

  @media (min-width: 1100px) {
    img {
      width: 75%;
    }
  }
`;

export const FeaturesContainer = styled.section<FeaturesContainerProps>`
  * {
    margin: 0;
  }

  margin-top: ${(props) => (props.mission ? '10rem' : '4rem')};

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const FeatureTextSmall = styled.p`
  color: #2375ef;
  font-size: 1.25rem;
  line-height: 24px;
  text-align: center;
`;

export const FeatureHeaderText = styled.p`
  margin: 0;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.8rem 2.5rem;

  font-size: 1.625rem;
  line-height: 32px;
  letter-spacing: 0.02em;

  @media (min-width: 550px) {
    width: 70%;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }

  @media (min-width: 1100px) {
    width: 42%;
  }
`;

export const CustomHeaderText = styled(FeatureHeaderText)`
  margin-bottom: 1rem;
  padding: 0.8rem 1.2rem;

  @media (min-width: 550px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1100px) {
    width: 45%;
  }
`;

export const LinkButton = styled.a`
  padding: 12px 1rem;
  color: #ffffff;
  border-radius: 8px;
  background: #2375ef;

  margin: 1.5rem 0;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  line-height: 24px;
  text-align: center;

  span {
    img {
      margin-top: 8.8px;
      width: 15px;
      height: 15px;
    }
  }
`;
