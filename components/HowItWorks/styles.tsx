import styled from 'styled-components';
import { FeatureHeaderText, FeaturesContainer } from '../common';

export const Container = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .mini-header {
    margin: 0;
    font-size: 20px;
    color: #2375ef;
    font-weight: 700;
    text-align: center;

    line-height: 24px;
  }

  .read-docs {
    width: 90%;
    padding: 12px 1rem;
    color: #ffffff;
    border-radius: 8px;
    background: #2375ef;

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
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 1rem;
  padding: 0.8rem 1.2rem;
`;
