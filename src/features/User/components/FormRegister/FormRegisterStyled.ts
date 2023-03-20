import styled from 'styled-components';

export const RegisterForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  input {
    font-family: var(--font-family-inter-medium);
    font-size: var(--font-size-s);
  }
  @media (min-width: 1440px) {
    input {
      font-family: var(--font-family-inter-medium);
      font-size: var(--font-size-m);
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameLabel = styled.label`
  font-family: var(--main-font-inter-bold);
  font-size: var(--font-size-s);
  @media (min-width: 1440px) {
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-m);
  }
`;

export const NameInput = styled.input`
  background: #ffffff;
  border: 1px solid #433e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 43px;
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    height: 75px;
    border-radius: 15px;
    margin-bottom: 3rem;
  }
`;

export const SurNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SurNameLabel = styled.label`
  font-family: var(--main-font-inter-bold);
  font-size: var(--font-size-s);

  @media (min-width: 1440px) {
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-m);
  }
`;

export const SurNameInput = styled.input`
  background: #ffffff;
  border: 1px solid #433e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 43px;
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    height: 75px;
    border-radius: 15px;
    margin-bottom: 3rem;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmailLabel = styled.label`
  font-family: var(--main-font-inter-bold);
  font-size: var(--font-size-s);

  @media (min-width: 1440px) {
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-m);
  }
`;

export const EmailInput = styled.input`
  background: #ffffff;
  border: 1px solid #433e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 43px;
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    height: 75px;
    border-radius: 15px;
    margin-bottom: 3rem;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordLabel = styled.label`
  font-family: var(--main-font-inter-bold);
  font-size: var(--font-size-s);

  @media (min-width: 1440px) {
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-m);
  }
`;

export const PasswordInput = styled.input`
  background: #ffffff;
  border: 1px solid #433e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 43px;
  margin-bottom: 1.8rem;

  @media (min-width: 1440px) {
    height: 75px;
    border-radius: 15px;
    margin-bottom: 3rem;
  }
`;

export const RegisterButton = styled.button`
  height: 40px;
  left: 41px;
  top: 606px;
  background: #f3f3f3;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: var(--main-font-inter-bold);
  font-size: var(--font-size-s);

  @media (min-width: 1440px) {
    height: 60px;
    border-radius: 10px;
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-m);
  }
`;
