import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  .login-button {
    height: 40px;
    left: 41px;
    top: 606px;
    background: #f3f3f3;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: var(--main-font-inter-bold);
    font-size: var(--font-size-s);
  }
  input {
    font-family: var(--font-family-inter-medium);
    font-size: var(--font-size-s);
  }
  @media (min-width: 1440px) {
    .login-button {
      height: 60px;
      border-radius: 10px;
      font-family: var(--main-font-inter-extra-bold);
      font-size: var(--font-size-m);
    }
    input {
      font-family: var(--font-family-inter-medium);
      font-size: var(--font-size-m);
    }
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  .login_email-input {
    background: #ffffff;
    border: 1px solid #433e3e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 43px;
    margin-bottom: 1rem;
  }
  .login_email {
    font-family: var(--main-font-inter-bold);
    font-size: var(--font-size-s);
  }
  @media (min-width: 1440px) {
    .login_email-input {
      height: 75px;
      border-radius: 15px;
      margin-bottom: 3rem;
    }
    .login_email {
      font-family: var(--main-font-inter-extra-bold);
      font-size: var(--font-size-m);
    }
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  .login_password-input {
    background: #ffffff;
    border: 1px solid #433e3e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 43px;
    margin-bottom: 1.8rem;
  }
  .login_password {
    font-family: var(--main-font-inter-bold);
    font-size: var(--font-size-s);
  }
  @media (min-width: 1440px) {
    .login_password-input {
      height: 75px;
      border-radius: 15px;
      margin-bottom: 3.5rem;
    }
    .login_password {
      font-family: var(--main-font-inter-extra-bold);
      font-size: var(--font-size-m);
    }
  }
`;
export const TextLoginContainer = styled.div`
  width: 90%;
  display: flex;
  .login-ask {
    width: 50%;
    text-align: left;
    font-family: var(--font-family-inter-semi-bold);
    font-size: var(--font-size-xs);
  }
  .login-register {
    text-align: right;
    width: 50%;
    font-family: var(--font-family-inter-semi-bold);
    font-size: var(--font-size-xs);
    color: var(--color-font-auth);
  }
  .form-message {
    font-family: var(--font-family-inter-semi-bold);
    font-size: var(--font-size-s);
  }
  @media (min-width: 1440px) {
    .login-register,
    .login-ask {
      font-family: var(--main-font-inter-extra-bold);
      font-size: var(--font-size-m);
    }
    .form-message {
      font-family: var(--font-family-inter-semi-bold);
      font-size: var(--font-size-m);
    }
  }
`;
