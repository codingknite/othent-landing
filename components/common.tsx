import styled from 'styled-components';

export const DemoGif = styled.div`
  img {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FeaturesContainer = styled.section`
  margin-top: 2rem;

  .why-othent {
    margin: 0;
    text-align: center;
    font-size: 24px;
    color: #2375ef;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.02em;

    /** TODO: REFACTOR */
    margin-top: 5rem;
  }

  .works-desktop {
    display: none;
  }

  .works-mobile {
    margin-top: 2rem;
  }
`;

export const FeatureHeaderText = styled.p`
  margin: 0;
  margin-bottom: 2rem;

  padding: 0.7rem 1rem;
  text-align: center;

  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.02em;
`;
