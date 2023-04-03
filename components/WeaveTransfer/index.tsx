import { useState } from 'react';
import { FeatureTextSmall, FeaturesContainer } from '../common';
import * as Styled from './styles';

const WeaveTransfer = () => {
  const [testMail, setTestMail] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const [txnInputValue, setTxnInputValue] = useState('');
  const [menuActive, setMenuActive] = useState('upload');
  const [downloadDemo, setDownloadDemo] = useState(false);
  const [uploadClicked, setUploadClicked] = useState(false);

  const handleUploadClick = () => {
    setUploadClicked(true);
  };

  const handleUploadClose = () => {
    setTestMail('');
    setTestMessage('');
    setUploadClicked(false);
  };

  const handleDownloadDemo = async () => {
    if (txnInputValue) {
      setDownloadDemo(true);
      setTimeout(() => {
        setDownloadDemo(false);
      }, 2500);
    }
  };

  const UploadModal = () => {
    return (
      <div className='upload'>
        {uploadClicked ? (
          <img src='/upload-container-blue.svg' alt='upload container' />
        ) : (
          <img src='/upload-container.svg' alt='upload container' />
        )}

        {uploadClicked ? (
          <div>
            <p className='file-selected'>filename.jsx</p>
            <p className='file-size'>8kb</p>
          </div>
        ) : (
          <div>
            <p className='no-files'>No file selected</p>
            <p className='browse-files'>Browse files...</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <Styled.MainWrapper>
      <FeatureTextSmall>Use Web2 for Web3 transactions</FeatureTextSmall>
      <Styled.HeaderText>Experience it yourself</Styled.HeaderText>

      <Styled.Container>
        <div className='weave-transfer'>
          <img src='/wt-logo.svg' alt='weave transfer logo'></img>
          <p>Weave Transfer</p>
        </div>

        <p className='wt-text'>
          Permanent file transfer and storage using the Arweave permaweb and
          Othent walletless protocol.
        </p>

        {menuActive === 'upload' ? (
          <Styled.Button>
            <img src='/wt-google.svg' alt='wt google' />
            Sign with Google
          </Styled.Button>
        ) : null}

        <Styled.UploadMenu active={menuActive}>
          <div className='menu-items'>
            <p
              className='upload-text'
              onClick={() => {
                setTxnInputValue('');
                setMenuActive('upload');
              }}
            >
              Upload
            </p>
            <p
              className='download-text'
              onClick={() => setMenuActive('download')}
            >
              Download
            </p>
          </div>
          <div className='progress'>
            <span className='upload'></span>
            <span className='download'></span>
          </div>
        </Styled.UploadMenu>

        {menuActive === 'upload' ? (
          <>
            {uploadClicked ? (
              <Styled.UploadDemo clicked={uploadClicked}>
                <UploadModal />

                {uploadClicked ? (
                  <div onClick={handleUploadClose}>
                    <img src='/x-close.svg' alt='upload container' />
                  </div>
                ) : null}
              </Styled.UploadDemo>
            ) : (
              <Styled.UploadDemo
                clicked={uploadClicked}
                onClick={handleUploadClick}
              >
                <UploadModal />
              </Styled.UploadDemo>
            )}

            <input
              readOnly
              type='text'
              className='upload-text'
              placeholder='Message (optional)'
              onClick={() => {
                if (uploadClicked) {
                  setTestMessage('Test message');
                }
              }}
              value={testMessage}
            />
            <input
              readOnly
              type='text'
              placeholder='Email'
              className='upload-text'
              onClick={() => {
                if (uploadClicked) {
                  setTestMail('hello@othent.io');
                }
              }}
              value={testMail}
            />

            <Styled.Button>
              <img src='/upload-icon.svg' alt='upload icon' />
              Upload
            </Styled.Button>
          </>
        ) : (
          <>
            <p className='txn-id'>Transaction ID: </p>
            {downloadDemo ? (
              <img src='/downloading.svg' alt='' />
            ) : (
              <input
                readOnly
                type='text'
                className='txn-input'
                placeholder='Enter your ID here...'
                value={txnInputValue}
                onClick={() => {
                  setTxnInputValue('NVkSolD-1AJcJ0BMfEASJjIuak3Y...');
                }}
              />
            )}

            <Styled.Button onClick={handleDownloadDemo} bkg={downloadDemo}>
              <img src='/download.svg' alt='upload icon' />
              Download
            </Styled.Button>
          </>
        )}
      </Styled.Container>

      <Styled.WTLink href=''>
        View WeaveTransfer Live
        <span>
          <img src='/arrow-icon-blue.svg' alt='arrow icon' />
        </span>
      </Styled.WTLink>
    </Styled.MainWrapper>
  );
};

export default WeaveTransfer;
