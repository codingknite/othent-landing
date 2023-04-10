import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 550px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: 90%;
    margin: auto;
    flex-wrap: nowrap;
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
`;
