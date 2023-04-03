import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
  }

  p {
    margin-top: 0;
    padding: 0rem 3rem 0rem 1rem;
    font-weight: 630;
    font-size: 20px;
    color: #4a505a;
    margin-bottom: 2rem;
  }

  .tagline {
    font-weight: 630;
    font-size: 20px;
    color: #4a505a;
    padding: 0rem 3rem 0rem 1rem;
    margin-bottom: 1rem;
  }

  button {
    width: 90%;
    border: none;
    border-radius: 8px;
    padding: 1.1rem;
    margin-bottom: 1rem;

    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }

  .get-started {
    background: #2375ef;
  }

  .demo {
    color: #2375ef;
    background: none;
    border: 1.2px solid #2375ef;
  }
  @keyframes spin_words {
    0% {
      transform: translateY(-12%);
    }
    2.7% {
      transform: translateY(-10%);
    }
    5.4% {
      transform: translateY(-112%);
    }
    8.1% {
      transform: translateY(-100%);
    }
    10.8% {
      transform: translateY(-212%);
    }
    13.5% {
      transform: translateY(-200%);
    }
    16.2% {
      transform: translateY(-312%);
    }
    18.9% {
      transform: translateY(-300%);
    }
    21.6% {
      transform: translateY(-412%);
    }
    24.3% {
      transform: translateY(-400%);
    }
    27% {
      transform: translateY(-512%);
    }
    29.7% {
      transform: translateY(-500%);
    }
    32.4% {
      transform: translateY(-612%);
    }
    35.1% {
      transform: translateY(-600%);
    }
    37.8% {
      transform: translateY(-712%);
    }
    40.5% {
      transform: translateY(-700%);
    }
    43.2% {
      transform: translateY(-812%);
    }
    45.9% {
      transform: translateY(-800%);
    }
    48.6% {
      transform: translateY(-912%);
    }
    51.3% {
      transform: translateY(-900%);
    }
    54% {
      transform: translateY(-1012%);
    }
    56.7% {
      transform: translateY(-1000%);
    }
    59.4% {
      transform: translateY(-1112%);
    }
    62.1% {
      transform: translateY(-1100%);
    }
    64.8% {
      transform: translateY(-1212%);
    }
    67.5% {
      transform: translateY(-1200%);
    }
    70.2% {
      transform: translateY(-1312%);
    }
    72.9% {
      transform: translateY(-1300%);
    }
    75.6% {
      transform: translateY(-1412%);
    }
    78.3% {
      transform: translateY(-1400%);
    }
    81% {
      transform: translateY(-1512%);
    }
    83.7% {
      transform: translateY(-1500%);
    }
    86.4% {
      transform: translateY(-1612%);
    }
    89.1% {
      transform: translateY(-1600%);
    }
    91.8% {
      transform: translateY(-1712%);
    }
    94.5% {
      transform: translateY(-1700%);
    }
  }
`;

export const Socials = styled.div`
  box-sizing: content-box;
  height: 26px;
  display: flex;
  gap: 0.5rem;

  .items-container {
    overflow: hidden;
  }

  span {
    height: 100%;
    display: block;
    animation: spin_words 16s infinite;
  }

  .special {
    img {
      height: 26px;
    }
  }

  .discord {
    color: #5865f2;
  }

  .dribble {
    color: #e84c88;
  }
  .twitch {
    color: #9147ff;
  }
  .spotify {
    color: #1ed760;
  }
  .vimeo {
    color: #1ab7ea;
  }
  .facebook {
    color: #1778f2;
  }
  .apple {
    color: #a2aaad;
  }
  .linkedin {
    color: #0072b1;
  }
  .github {
    color: #f1502f;
  }
  .dropbox {
    color: #007ee5;
  }
  .yahoo {
    color: #6200d1;
  }
  .paypal {
    background: linear-gradient(90deg, #002b8a 0%, #019ae0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amazon {
    color: #ff9900;
  }
  .twitter {
    color: #1da1f2;
  }
`;
