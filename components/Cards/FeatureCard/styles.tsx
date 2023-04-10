import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  width: 85%;
  display: flex;
  flex-direction: column;

  border-radius: 26px;
  background: #f2f2f2;
  margin-bottom: 1.5rem;
  border: 1px solid #d3e3fc;

  div {
    margin-bottom: 2rem;

    img {
      width: 100%;
      padding: 2rem;
      height: 200px;
      background: #d3e3fc;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;

      background: orangered;
    }
  }

  /* 
  margin: 0 1.3rem;

  img {
    padding: 2rem;
  }

  @media (min-width: 550px) {
    width: 42%;
  }

  @media (min-width: 1024px) {
    margin: 0;
    width: 45%;

    img {
      height: 150px;
      margin-bottom: 1rem;
    }
  } */
`;

export const Title = styled.p`
  color: #2375ef;
  line-height: 24px;
  font-size: 1.25rem;

  padding: 0 2rem;
  margin-bottom: 0.7rem;

  /* margin: 0;
  padding: 0 2rem;
  margin-bottom: 0.7rem;

  color: #2375ef;
  font-size: 1.25rem;
  line-height: 24px;

  @media (min-width: 1024px) {
    font-size: 1rem;
  } */
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 24px;

  color: #4a505a;
  padding: 0rem 2rem;
  margin-bottom: 2rem;

  /* margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 24px;

  padding: 0 2rem;

  color: #4a505a;

  @media (min-width: 1024px) {
    font-size: 0.875rem;
    line-height: 18px;
  } */
`;
