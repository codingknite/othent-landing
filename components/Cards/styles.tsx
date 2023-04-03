import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  margin: 1.2rem;
  margin-bottom: 1.6rem;
  border-radius: 26px;

  display: flex;
  flex-direction: column;
  border: 1px solid #d3e3fc;

  img {
    padding: 2rem;
    width: 100%;
    height: 200px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background: #d3e3fc;

    margin-bottom: 2rem;

    padding: ${(props) => (props.img === '/auth.svg' ? '2.3rem' : '')};
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 0 2rem;
  margin-bottom: 0.7rem;

  color: #2375ef;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 24px;

  padding: 0 2rem;

  color: #4a505a;
`;

export const SlideCardContainer = styled.div`
  border: 1px solid #2375ef;
  margin: 0.7rem;
  border-radius: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  padding: 0.6rem;

  .card-num-container {
    * {
      margin: 0;
    }

    .card-num {
      color: #2375ef;

      width: 48px;
      height: 48px;
      padding: 1rem;
      border-radius: 50%;
      background: #d3e3fc;

      border: 1px solid #2375ef;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }

  .text-container {
    * {
      margin: 0;
    }

    h3 {
      margin-top: 0.35rem;
      color: #2375ef;
      font-weight: 650;
      font-size: 24px;
      line-height: 32px;
    }

    p {
      margin-top: 0.5rem;
      color: #7d8795;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;
