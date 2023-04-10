import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';

const Nav = () => {
  return (
    <Styled.NavBar>
      <Styled.NavLogo>
        <div className='toggle'>
          <div></div>
        </div>
        <p className={DMSans700.className}>Othent</p>
      </Styled.NavLogo>

      <Styled.NavButton>
        <a href='' className={`${DMSans700.className} devs`}>
          Developers
        </a>
        <a href='/blog' className={DMSans700.className}>
          Blog
        </a>
        <button className={DMSans700.className}>Contact Us</button>
      </Styled.NavButton>
    </Styled.NavBar>
  );
};

export default Nav;
