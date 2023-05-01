import styled from 'styled-components';

export const HowAreContainer = styled.article`
  background-color: rgb(246, 246, 246);
  width: 75%;
  min-height: 350px;
  border-radius: 7%;
  padding-left: 8%;
  padding-top: 9%;
  margin-top: 55%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  height: 65px;
  width: 20%;
  z-index: 999;
  font-size: 2.3rem;
  background: rgba(9, 9, 9, 0.5);
  color: lightcyan;
  border-radius: 0px 10px;
`;

export const HowAreText = styled.p`
  font-family: var(--font-family-inter-semi-bold);
`;

export const DescriptionText = styled.p`
  width: 75%;
  padding-bottom: 5%;
  font-family: var(--font-family-inter-regular);
  font-size: var(--font-size-xs);
`;

export const ContactText = styled.p`
  font-family: var(--font-family-inter-semi-bold);
`;

export const PhoneText = styled.p`
  font-family: var(--font-family-inter-regular);
  padding-bottom: 10%;
`;

export const ReviewsContainer = styled.article`
  text-align: start;
  width: 100%;
  margin-top: 5%;
  .star-detail {
    color: goldenrod;
  }
`;

export const ReviewTitle = styled.p`
  font-family: var(--main-font-inter-bold);
`;

export const ReviewText = styled.p`
  font-family: var(--font-family-inter-regular);
  font-size: var(--font-size-xs);
`;

export const ErrorDetail = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-m);
  text-align: center;
`;

export const DeletedSalonText = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-m);
  text-align: center;
`;
