import styled from 'styled-components';

export const NavBar = styled.nav`
  * {
    margin: 0;
  }

  width: 100%;
  display: flex;
  position: fixed;
  padding: 1.1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  z-index: 999;

  @media (min-width: 550px) {
    padding: 1.1rem 2rem;
  }

  /* @media (min-width: 1500px) {
    width: 1500px;
  } */
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  p {
    color: #2375ef;
    font-size: 1.125rem;

    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }

  .toggle {
    width: 60px;
    height: 35px;
    border-radius: 2rem;
    background: #2375ef;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    div {
      height: 33px;
      width: 33px;
      margin-right: 1px;
      border-radius: 50%;
      background: #fff;
    }

    @media (min-width: 550px) {
      width: 57px;
      height: 32px;

      div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const NavButton = styled.div`
  a {
    font-size: 1rem;
    margin-right: 1.2rem;

    &:hover {
      opacity: 0.65;
    }
  }

  .devs {
    display: none;

    @media (min-width: 550px) {
      display: inline-flex;
    }
  }

  button {
    cursor: pointer;
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    background: #2375ef;

    font-size: 1rem;
    color: #ffffff;

    &:hover {
      opacity: 0.85;
    }

    @media (min-width: 1024px) {
      padding: 8px 14px;
    }
  }
`;
