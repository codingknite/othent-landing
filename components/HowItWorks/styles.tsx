import styled from 'styled-components';
import { FeaturesContainer } from '../common';

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
`;
