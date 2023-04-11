import styled from 'styled-components';
import { FeatureHeaderText, FeaturesContainer } from '../common';

export const Container = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .works-desktop {
    display: none;

    @media (min-width: 550px) {
      width: 100%;
      display: block;
      padding: 2rem;
    }

    @media (min-width: 1024px) {
      width: 80%;
      margin-top: 1rem;
      padding: 2rem 6rem;
    }

    @media (min-width: 1100px) {
      width: 70%;
    }
  }

  .works-mobile {
    margin-top: 2rem;

    @media (min-width: 550px) {
      display: none;
    }
  }
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;

  @media (min-width: 550px) {
    width: 70%;
    margin: auto;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1100px) {
    width: 45%;
  }
`;

export const ReadDocs = styled.a`
  width: 90%;
  padding: 12px 1rem;
  color: #ffffff;
  border-radius: 8px;
  background: #2375ef;

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

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 550px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    padding: 7px 1rem;
    width: 18%;
  }

  @media (min-width: 1100px) {
    width: 12%;
    padding: 10px 1rem;
  }
`;
