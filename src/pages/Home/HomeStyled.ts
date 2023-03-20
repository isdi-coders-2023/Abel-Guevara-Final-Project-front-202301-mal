import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const HomeTitle = styled.h1`
  font-family: var(--main-font-inter-extra-bold);
  font-size: var(--font-size-l);
  width: 80%;
  text-align: center;
  margin-bottom: 0%;
  @media (min-width: 1440px) {
    font-size: var(--font-size-xl);
    margin-top: 3%;
  }
`;

export const HomeDescription = styled.p`
  font-family: var(--font-family-inter-medium);
  text-align: center;
  margin-bottom: 0%;
  @media (min-width: 1440px) {
    font-size: var(--font-size-l);
    margin-top: 1%;
  }
`;

export const LinkToRegister = styled.p`
  color: var(--color-font-auth);
  font-size: var(--font-size-s);
  margin-top: 1%;
  @media (min-width: 1440px) {
    font-size: var(--font-size-m);
  }
`;
