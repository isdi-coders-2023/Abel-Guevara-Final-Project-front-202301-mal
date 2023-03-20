import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-logo {
    width: fit-content;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    .login-logo {
      width: 80%;
    }
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 150px;
  background-image: url('../../../assets/images/register.webp');
  background-size: cover;
  .login-house {
    width: 10%;
    height: 15%;
    padding-top: 2%;
    color: #433e3e;
  }
  @media (min-width: 1440px) {
    .login-house {
      width: 5%;
      padding-top: 0%;
      margin-left: -64%;
    }
    width: 60%;
    height: 100vh;
  }
`;

export const FormLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    width: 40%;
    align-self: self-start;
  }
`;

export const Spinner = styled.div`
  width: 4em;
  height: 4em;
  background: #a1a2a1;
  border-radius: 50%;
  margin: 5em auto;
  border: 0.3em solid transparent;
  animation: glow 1s ease infinite;

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 0.1em #a1a2a1;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #605556;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 3.6em transparent;
    }
  }
`;
