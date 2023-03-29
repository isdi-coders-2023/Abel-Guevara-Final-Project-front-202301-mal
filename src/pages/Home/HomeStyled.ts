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

export const FilterContainer = styled.section`
  display: inline-flex;
  gap: 10%;
  justify-content: center;
  width: 80%;
`;

export const FilterCategoriesText = styled.button`
  font-family: var(--main-font-inter-extra-bold);
  font-size: var(--font-size-s);
  margin-bottom: 10%;
  border-radius: 5px;
  background: rgba(217, 217, 217, 0.7);
  offset: 0px, 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: inherit;
  height: 35px;
  cursor: pointer;
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
