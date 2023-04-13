import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #433e3e;
  bottom: 0px;
  position: fixed;
  width: 100%;
  height: 15vh;
  @media (min-width: 1440px) {
    height: 25vh;
    position: relative;
  }
`;

export const InfoContainer = styled.div``;

export const HowAre = styled.p`
  color: #ffffff;
  font-family: var(--font-family-inter-medium);
  @media (min-width: 1440px) {
    font-size: var(--font-size-m);
  }
`;

export const Contact = styled.p`
  color: #ffffff;
  font-family: var(--font-family-inter-medium);
  @media (min-width: 1440px) {
    font-size: var(--font-size-m);
  }
`;

export const SocialRedContainer = styled.div`
  display: grid;
  img {
    width: 75%;
  }
  @media (min-width: 1440px) {
    img {
      width: 100%;
    }
  }
`;
