import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    width: 100%;
    flex-direction: row;
    justify-content: center;

    margin-top: 2rem;
  }
`;
