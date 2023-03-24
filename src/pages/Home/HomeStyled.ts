import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const HomeDescription = styled.h2`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-s);
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

export const Loading = styled.img`
  width: 60%;
  height: 30%;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const ErrorHome = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-l);
  text-align: center;
`;
