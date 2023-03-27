import styled from 'styled-components';

export const NavBar = styled.nav`
  * {
    margin: 0;
  }

  /* background-color: orange; */

  padding: 1.1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  p {
    color: #2375ef;
    font-size: 18px;
    font-weight: 800;
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
  }
`;

export const NavButton = styled.div`
  a {
    font-size: 14px;
    font-weight: 700;
    margin-right: 1.2rem;
  }

  button {
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    background: #2375ef;

    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
  }
`;
