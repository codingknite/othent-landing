import * as Styled from './styles';

const Nav = () => {
  return (
    <Styled.NavBar>
      <Styled.NavLogo>
        <div className='toggle'>
          <div></div>
        </div>
        <p>Othent</p>
      </Styled.NavLogo>

      <Styled.NavButton>
        <a href='/blog'>Blog</a>
        <button>Contact Us</button>
      </Styled.NavButton>
    </Styled.NavBar>
  );
};

export default Nav;
