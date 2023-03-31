import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.CLabs>
        <img src='/logo.svg' alt='CLABS LOGO' />
        <div>
          <img src='/clabs-logo.svg' alt='CLABS LOGO' />
          <p>
            Incubated by <span>Community Labs</span>
          </p>
        </div>
      </Styled.CLabs>

      <Styled.FooterItems>
        <ul>
          <p>Resources</p>
          <li>Github</li>
          <li>Documentation</li>
          <li>Announcements</li>
        </ul>

        <ul>
          <p>Company</p>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

        <ul>
          <p>Legal</p>
          <li>Terms of Service</li>
          <li>All rights reserved</li>
          <li>Copyright @ 2022</li>
        </ul>

        <ul>
          <p>Follow us</p>
          <li>
            <img src='' alt='' />
            Discord
          </li>
          <li>
            <img src='' alt='' />
            Github
          </li>
          <li>
            <img src='' alt='' />
            Twitter
          </li>
        </ul>
      </Styled.FooterItems>
    </Styled.Container>
  );
};

export default Footer;
