import styled from 'styled-components';

export const CardsContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    gap: 2rem;
    width: 100%;
    flex-direction: row;
    justify-content: center;

    margin-top: 2.5rem;
  }
`;
