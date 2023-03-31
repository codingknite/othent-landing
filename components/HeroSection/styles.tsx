import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
  }

  p {
    margin-top: 0;
    padding: 0rem 3rem 0rem 1rem;
    font-weight: 630;
    font-size: 20px;
    color: #4a505a;
    margin-bottom: 2rem;
  }

  button {
    width: 90%;
    border: none;
    border-radius: 8px;
    padding: 1.1rem;
    margin-bottom: 1rem;

    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }

  .get-started {
    background: #2375ef;
  }

  .demo {
    color: #2375ef;
    background: none;
    border: 1.2px solid #2375ef;
  }
`;
