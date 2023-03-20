import styled from 'styled-components';

export const ErrorMessage = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-m);
  text-align: center;
  @media (min-width: 1440px) {
    font-size: var(--font-size-xl);
  }
`;

export const BackToLogin = styled.button`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-s);
  color: var(--color-font-auth);
  display: contents;
  @media (min-width: 1440px) {
    font-size: var(--font-size-l);
  }
`;
