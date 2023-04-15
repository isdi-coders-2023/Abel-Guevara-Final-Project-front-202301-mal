import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 30%;

  @media (min-width: 768px) {
    padding-bottom: 5%;
  }

  @media (min-width: 1440px) {
    padding-bottom: 5%;
  }
`;
