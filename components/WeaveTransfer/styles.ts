import styled from 'styled-components';
import { FeatureHeaderText, FeaturesContainer } from '../common';

interface Props {
  clicked: boolean;
}

interface MenuProps {
  active: string;
}

interface ButtonProps {
  bkg?: boolean;
}

export const MainWrapper = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  background-image: url('/bkg-squares.svg'), url('bkg-circles.svg');
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 2rem;
  padding: 0.5rem 2.5rem;
`;

export const Container = styled.div`
  @media (min-width: 1024px) {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    width: 70%;
    margin: auto;
  }
`;

export const WTContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #d3e3fc;
  background: #f2f2f2;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    width: 65%;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    width: 42%;
  }

  .weave-transfer {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.875rem;
    line-height: 48px;

    p {
      color: #2375ef;
    }
  }

  .wt-text {
    margin-top: 1rem;
    text-align: center;

    color: #4a505a;
    font-size: 1rem;
    line-height: 24px;

    @media (min-width: 550px) {
      width: 80%;
    }
  }

  input {
    width: 90%;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: #ffffff;
    border: 1.5px solid #d3e3fc;

    &::placeholder {
      font-size: 1rem;
      color: #7bacf5;
    }

    @media (min-width: 1100px) {
      padding: 10px 1rem;
    }
  }

  .txn-id {
    align-self: flex-start;
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-size: 1rem;
    color: #7d8795;
    line-height: 24px;
  }

  .txn-input {
    padding: 1rem;
    font-size: 0.9375rem;
    color: #2375ef;
    line-height: 24px;

    @media (min-width: 1100px) {
      padding: 10px 1rem;
    }
  }

  .upload-text {
    font-size: 1rem;
    line-height: 24px;
  }
`;

export const StepsContainer = styled.div`
  @media (min-width: 550px) {
    width: 70%;
    margin: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }
`;

export const UploadDemo = styled.div<Props>`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: ${(props) =>
    props.clicked ? '1px solid #D3E3FC;' : '1px dashed #cbcfd5'};

  @media (min-width: 1024px) {
    height: 170px;
    border-radius: 8px;
    border: 1.5px dashed #a7c8f9;

    justify-content: center;
  }

  div {
    p {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const UploadMenu = styled.div<MenuProps>`
  width: 90%;
  margin-top: 2rem;

  gap: 1rem;
  display: flex;
  flex-direction: column;

  .menu-items {
    * {
      margin: 0;
    }

    width: 100%;
    display: flex;
    justify-content: space-around;

    p {
      cursor: pointer;
      font-size: 1rem;
      line-height: 24px;

      &.upload-text {
        font-weight: ${(props) =>
          props.active === 'upload' ? '700' : '500'} !important;

        color: ${(props) =>
          props.active === 'upload' ? '#2375ef' : '#7D8795;'};
      }

      &.download-text {
        font-weight: ${(props) =>
          props.active === 'download' ? '700' : '500'} !important;

        color: ${(props) =>
          props.active === 'download' ? '#2375ef' : '#7D8795;'};
      }
    }
  }

  .progress {
    display: flex;
    width: 100%;
    height: 1.8px;
    border: none;
    background: #80808030;

    .upload,
    .download {
      display: block;
      width: 50%;
      height: 100%;
    }

    .upload {
      color: ${(props) => (props.active === 'upload' ? '#2375ef' : 'none')};
    }

    .download {
      color: ${(props) => (props.active === 'download' ? '#2375ef' : 'none')};
    }

    .upload {
      background: ${(props) =>
        props.active === 'upload' ? '#2375ef' : 'none'};
    }

    .download {
      background: ${(props) =>
        props.active === 'download' ? '#2375ef' : 'none'};
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 90%;
  border: none;
  cursor: pointer;
  margin-top: 0.8rem;
  border-radius: 8px;
  padding: 12px 16px;
  background: ${(props) => (props.bkg ? '#B1B7BF' : '#2375ef')};

  font-size: 1rem;
  color: #ffffff;
  line-height: 24px;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 1024px) {
    padding: 12px 16px;
  }
`;

export const Steps = styled.div`
  gap: 1rem;
  background: #f2f2f2;

  display: flex;
  align-items: center;

  overflow: auto;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    p {
      gap: 1rem;
      cursor: grab;
      width: 300px;
      display: flex;
      font-size: 1rem;
      padding: 1.2rem;
      color: #2375ef;

      align-items: center;
      border-radius: 16px;
      border: 1px solid #2375ef;

      span {
        color: inherit;
        width: 40px;
        height: 40px;
        padding: 0.5rem;

        border-radius: 50%;
        border: 1px solid #d3e3fc;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 550px) {
    width: 70%;
    flex-direction: column;

    padding: 0;
    margin: 1rem;
    border-radius: 1rem;
    border: 1px solid #d3e3fc;

    div {
      width: 90%;

      display: flex;
      justify-content: center;

      &:nth-child(5) {
        margin-bottom: 1rem;
      }

      p {
        width: 90%;
        border: none;
        padding: 10px;
        margin: 0.5rem 1rem;
        color: #5296fc;
        gap: 1rem;
        font-size: 1rem;

        span {
          background: none;
        }
      }

      .special {
        color: #2375ef;
        margin-top: 1rem;
        border-radius: 16px;
        border: 2px solid #d3e3fc;

        span {
          background: #d3e3fc;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    width: 85%;

    div {
      p {
        border: none;
        padding: 5px;
        margin: 0.2rem 0;
      }

      .special {
        border: 1.5px solid #d3e3fc;
      }
    }
  }
`;

export const WTLink = styled.a`
  width: 90%;
  padding: 1rem;
  margin: auto;
  margin-bottom: 1rem;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #2375ef;
  border-radius: 8px;
  border: 1px solid #2375ef;
  background: #f2f2f2;

  font-size: 1rem;
  line-height: 24px;

  &:hover {
    color: #fff;
    background: #2375ef;
  }

  span {
    margin-top: 3.5px;
  }

  @media (min-width: 550px) {
    width: 70%;
  }

  @media (min-width: 1100px) {
    width: 85%;
    padding: 14px 1rem;

    span {
      img {
        display: none;
      }
    }
  }
`;

export const UploadModalContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    gap: 0.1rem;
    flex-direction: column;

    * {
      margin: 0;
      padding: 0;
    }

    img {
      width: 25%;
    }
  }

  .upload-mobile-svg {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .upload-desktop-svg {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .upload-text-mobile {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .browse-files-mobile {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .upload-text-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .browse-files-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .file-selected {
    color: #4a505a;
  }

  .file-size {
    color: #7d8795;
  }

  .upload-text-mobile,
  .browse-files-desktop {
    color: #7d8795;
  }

  .browse-files-mobile,
  .upload-text-desktop {
    color: #2375ef;
  }

  .select-upload-container {
    @media (min-width: 1100px) {
      p {
        font-size: 0.875rem;
        text-align: center;
      }
    }
  }
`;
