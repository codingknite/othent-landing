import styled from 'styled-components';

export const LandingPageContainer = styled.main``;

export const SectionTwo = styled.div`
  @media (min-width: 1024px) {
    background-image: url('/bkg-circles.svg'), url('bkg-squares.svg');
    background-size: 55% 90%, 60% 50%;
    background-repeat: no-repeat, no-repeat;
    background-position: -60% 160%, 160% 50%;
  }
`;

export const SectionThree = styled.div`
  @media (min-width: 1024px) {
    background-image: url('/bkg-squares.svg'), url('bkg-circles.svg'),
      url('bkg-squares.svg'), url('bkg-lines.svg');
    background-size: 60% 50%, 60% 80%, 60% 50%, 60% 50%;
    background-repeat: no-repeat, repeat-y, no-repeat, no-repeat;
    background-position: -60% 50%, -60% -10%, 160% 50%, 160% 50%;
  }
`;

export const SectionFour = styled.div`
  @media (min-width: 1024px) {
    background-image: url('/bkg-circles.svg'), url('bkg-circles.svg'),
      url('bkg-squares.svg');
    background-size: 60% 150%, 70% 70%, 60% 40%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: -55% 80%, 180% 20%, 160% 10%;
  }
`;

export const SectionOne = styled.div`
  @media (min-width: 1024px) {
    background-image: url('/bkg-squares.svg'), url('bkg-lines.svg');
    background-size: 35% 55%, 28.5% 48.5%;
    background-repeat: no-repeat, no-repeat;
    background-position: -20% 150%, 109% 144.5%;
  }
`;
