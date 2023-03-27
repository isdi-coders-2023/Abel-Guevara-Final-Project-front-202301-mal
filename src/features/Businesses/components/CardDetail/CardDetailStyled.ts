import styled from 'styled-components';

export const HowAreContainer = styled.article`
  background-color: #f6f6f6;
  width: 75%;
  min-height: 350px;
  border-radius: 7%;
  padding-left: 8%;
  padding-top: 9%;
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
  margin-top: 9%;
  margin-bottom: 10%;
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
