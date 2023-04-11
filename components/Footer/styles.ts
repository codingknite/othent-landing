import styled from 'styled-components';

export const Container = styled.footer`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 550px) {
    align-items: center;
    background-position: -10%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const CLabs = styled.div`
  padding: 1.5rem;

  @media (min-width: 550px) {
    width: 85%;
  }

  @media (min-width: 1024px) {
    padding: 0;
    padding-left: 2rem;
    width: 20%;
  }

  .inc {
    font-size: 1rem;
    color: #7d8795;

    margin-bottom: 1rem;

    @media (min-width: 550px) {
      margin-bottom: 0;
    }
  }

  div {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    .clabs-logo {
      width: 29px;
      height: 29px;
    }

    p {
      font-size: 0.875rem;
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
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    width: 80%;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }

  ul {
    padding: 1rem 1.5rem;

    p {
      font-size: 1rem;
      line-height: 150%;

      margin-bottom: 1rem;
    }

    li {
      cursor: pointer;
      list-style: none;
      text-decoration: none;

      font-size: 1rem;
      line-height: 150%;

      color: #7d8795;
      margin-bottom: 1rem;
    }
  }
`;

export const SocialChannels = styled.ul`
  li {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: 550px) {
    li {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
