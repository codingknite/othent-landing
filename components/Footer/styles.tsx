import styled from 'styled-components';

export const Container = styled.footer`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  flex-direction: column-reverse;

  .clabs {
  }

  .footer-items {
  }
`;

export const CLabs = styled.div`
  padding: 1.5rem;

  > p {
    font-weight: 700;
    font-size: 26.6891px;
    line-height: 40px;
    color: #2375ef;

    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 0.8rem;

    p {
      font-weight: 600;
      font-size: 1rem;
      line-height: 150%;
      color: #7d8795;

      span {
        color: #6f3efc;
        display: block;
      }
    }
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;

  ul {
    padding: 1rem 1.5rem;

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;

      margin-bottom: 1rem;
    }

    li {
      list-style: none;
      text-decoration: none;

      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      color: #7d8795;
      margin-bottom: 1rem;
    }
  }

  .socials {
    li {
      gap: 0.5rem;
      display: flex;
      align-items: center;
    }
  }
`;
