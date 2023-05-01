import styled from 'styled-components';

export const BusinessesListContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  width: 90%;
  align-self: center;
`;
