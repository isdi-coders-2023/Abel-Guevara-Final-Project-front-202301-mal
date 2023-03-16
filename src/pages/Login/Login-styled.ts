import styled from 'styled-components';

export const LoginContainer = styled.section`
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
  background-image: url('../../../assets/images/register.jpg');
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
