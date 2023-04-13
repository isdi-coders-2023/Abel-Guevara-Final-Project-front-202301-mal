import styled from 'styled-components';

export const BusinessesListContainer = styled.ul`
  display: contents;
  .business-list {
    width: 100%;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    .business-list {
      width: 25%;
    }
  }
`;
