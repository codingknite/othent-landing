import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  width: 85%;
  height: 370px;
  display: flex;
  flex-direction: column;

  border-radius: 26px;
  background: #f2f2f2;
  border: 1px solid #d3e3fc;

  @media (min-width: 550px) {
    width: 373.33px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }

  div {
    margin-bottom: 2rem;

    img {
      width: 100%;
      padding: 2rem;
      height: 200px;
      background: #d3e3fc;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;

      @media (min-width: 1024px) {
        height: 180px;
      }
    }
  }
`;

export const Title = styled.p`
  color: #2375ef;
  line-height: 24px;
  font-size: 1.25rem;

  padding: 0 2rem;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 24px;

  color: #4a505a;
  padding: 0rem 2rem;
  margin-bottom: 2rem;

  span {
    color: #2375ef;
  }
`;
