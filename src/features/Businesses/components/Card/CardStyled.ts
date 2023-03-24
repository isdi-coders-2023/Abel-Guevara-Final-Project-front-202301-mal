import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 100%;
`;

export const CardImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
export const CardImg = styled.img`
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const ScoreContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(9, 9, 9, 0.5);
  border-radius: 0px 10px;
  height: 78px;
  padding-left: 2%;
  padding-right: 2%;
`;

export const CardAveScore = styled.p`
  color: var(--color-font-score);
  font-size: var(--font-size-s);
  font-family: var(--main-font-inter-bold);
  margin-bottom: 0%;
`;

export const CardScore = styled.p`
  color: var(--color-font-score);
  font-family: var(--font-family-inter-regular);
  font-size: var(--font-size-xs);
  margin-top: 10%;
`;

export const CardNameBusinnes = styled.p`
  font-family: var(--main-font-inter-extra-bold);
  font-size: var(--font-size-m);
  margin-top: 4%;
  margin-bottom: 0%;
`;

export const CardAddress = styled.p`
  font-family: var(--font-family-inter-regular);
  font-size: var(--font-size-xs);
  color: var(--color-font-address);
  margin-top: 1%;
  margin-bottom: 13%;
`;
