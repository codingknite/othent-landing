import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 26px;

  display: flex;
  margin: 0 1.3rem;
  flex-direction: column;
  border: 1px solid #d3e3fc;
  background: #f2f2f2;

  img {
    width: 100%;
    padding: 2rem;
    height: 200px;
    margin-bottom: 2rem;
    background: #d3e3fc;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
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
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 0 2rem;
  margin-bottom: 0.7rem;

  color: #2375ef;
  font-size: 1.25rem;
  line-height: 24px;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 24px;

  padding: 0 2rem;

  color: #4a505a;

  @media (min-width: 1024px) {
    font-size: 0.875rem;
    line-height: 18px;
  }
`;
