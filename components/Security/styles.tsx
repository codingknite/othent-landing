import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3.5rem;

  .heading-1,
  .heading-2 {
    margin: 0;
    text-align: center;
    padding: 0.5rem 1.5rem;

    font-size: 24px;
    font-weight: 700;
  }

  .heading-1 {
    color: #2375ef;
  }

  .heading-2 {
    span {
      display: block;
    }
  }
`;

export const FeaturesContainer = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;

  border-radius: 1rem;
  border: 1.2px solid #cbcfd5;

  .tabs {
    /* background: orangered; */
    position: relative;
    display: flex;
    justify-content: center;

    gap: 2rem;

    p {
      width: 33.33%;
      /* background: blue; */

      text-align: center;
    }
    /* justify-content: space-between; */

    padding: 0 1.2rem;

    &::after {
      position: absolute;
      content: '';

      background: #efefef;
      width: 100%;
      height: 2px;

      top: 100%;
      left: 0%;

      /** TODO: Progress Bar */
    }

    p {
      color: #69727e;
      font-size: 1rem;
      font-weight: 700;
      line-height: 24px;
    }

    .active {
      color: #2375ef;

      &::after {
        position: absolute;
        content: '';

        background: blueviolet;
        width: 100%;
        height: 2px;

        top: 100%;
        left: 0%;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    .header {
      padding: 0.5rem 1rem;
      text-align: center;

      color: #2375ef;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
    }

    .text {
      padding: 0 1rem;

      font-size: 1rem;
      font-weight: 500;
      line-height: 24px;

      color: #7d8795;
    }

    .select-signin {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.7rem;

      .bar {
        background: #cbcfd5;
        height: 1px;
        width: 25px;
      }

      p {
        font-weight: 500;
        font-size: 1rem;
        line-height: 24px;

        color: #7d8795;
      }
    }

    button {
      background: #2375ef;
      width: 90%;
      margin: auto;
      border: none;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 8px;

      font-size: 1.05rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.7rem;

      div {
        width: 30px;
        height: 30px;
        border-radius: 50%;

        background: #fff;
      }
    }
    .cta {
      font-weight: 500;
      line-height: 24px;
      font-size: 1.05rem;

      display: flex;
      align-items: center;
      flex-direction: column;

      margin: 1rem 0;

      p {
        margin: 0;
        color: #4a505a;
        margin-bottom: 0.5rem;
      }

      a {
        color: #2375ef;
        margin-bottom: 0.55rem;
        text-decoration: underline;
      }
    }
  }
`;
