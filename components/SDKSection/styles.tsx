import styled from 'styled-components';
import { FeatureHeaderText, FeaturesContainer, LinkButton } from '../common';

export const container = styled(FeaturesContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  .read-docs {
    padding: 12px 1rem;
    color: #ffffff;
    border-radius: 8px;
    background: #2375ef;

    margin: 1.5rem 0;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;

    p {
    }

    span {
      img {
        margin-top: 8.8px;
        width: 15px;
        height: 15px;
      }
    }
  }

  .code-snippet {
    width: 100%;
  }
`;

export const Onboard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
  padding: 1.2rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;

  .try-out {
    font-size: 20px;
    color: #2375ef;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 0.25rem;
  }

  .onboard-users {
    font-size: 24px;
    margin: 0.5rem 0;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 1.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 3rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 45px;
      height: 45px;

      background: #d3e3fc;
      border-radius: 8px;
      padding: 0.7rem;
    }

    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      margin-top: 0.5rem;
    }
  }
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 0.5rem;
  padding: 0.5rem 2.5rem;
`;

export const Button = styled(LinkButton)``;
