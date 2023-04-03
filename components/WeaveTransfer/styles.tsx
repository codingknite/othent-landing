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
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 0.5rem;
  padding: 0.5rem 2.5rem;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #d3e3fc;

  display: flex;
  align-items: center;
  flex-direction: column;

  .weave-transfer {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    font-weight: 700;
    line-height: 48px;
  }

  .wt-text {
    margin-top: 1rem;
    text-align: center;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
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
      font-weight: 400;
      color: #7bacf5;
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
    font-weight: 400;
    line-height: 24px;
  }

  .txn-input {
    padding: 1rem;
    font-size: 15px;
    color: #2375ef;
    font-weight: 500;
    line-height: 24px;
  }

  .upload-text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
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

  div {
    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .file-selected {
    color: #4a505a;
  }

  .file-size {
    color: #7d8795;
  }

  .browse-files {
    color: #2375ef;
  }

  .upload {
    gap: 1rem;
    display: flex;
    align-items: cente;
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
      font-size: 1rem;
      line-height: 24px;

      &.upload-text {
        font-weight: ${(props) => (props.active === 'upload' ? '700' : '500')};

        color: ${(props) =>
          props.active === 'upload' ? '#2375ef' : '#7D8795;'};
      }

      &.download-text {
        font-weight: ${(props) =>
          props.active === 'download' ? '700' : '500'};

        color: ${(props) =>
          props.active === 'download' ? '#2375ef' : '#7D8795;'};
      }
    }
  }

  .progress {
    display: flex;
    width: 100%;
    height: 2.5px;
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
  margin-top: 0.8rem;
  border-radius: 8px;
  padding: 12px 16px;
  background: ${(props) => (props.bkg ? '#B1B7BF' : '#2375ef')};

  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 24px;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;

  span {
    margin-top: 3.5px;
  }
`;
