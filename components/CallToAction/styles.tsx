import styled from 'styled-components';
import { FeaturesContainer, FeatureHeaderText } from '../common';

export const Container = styled(FeaturesContainer)`
  margin-bottom: 3.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 90%;
    margin: auto;
    padding: 14px;

    border: none;
    border-radius: 8px;
    margin-bottom: 1rem;

    font-size: 16px;
    font-weight: 550;
    line-height: 24px;

    &.primary-btn {
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      background: #2375ef;
    }

    &.secondary-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.7rem;
      color: #5865f2;
      background: none;
      border: 2px solid #5865f2;
    }
  }

  .test {
    margin-bottom: 0;
  }

  .mailbox-info {
    padding: 0 1.5rem;
    color: #7d8795;
    text-align: center;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 2rem;
  }

  input {
    font-size: 1rem;

    width: 90%;
    border: 2px solid #d3e3fc;
    outline: none;
    padding: 1rem;

    border-radius: 8px;
    margin-bottom: 1rem;

    &::placeholder {
      font-size: 1rem;
      color: #7bacf5;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

export const HeaderText = styled(FeatureHeaderText)`
  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem;
`;
