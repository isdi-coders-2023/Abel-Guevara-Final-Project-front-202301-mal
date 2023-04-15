import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-image: url('../../../../assets/images/header-movil.webp');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 240px;
  .button,
  .menu {
    position: absolute;
    transition: all 0.2s ease-in-out;
  }

  #check {
    display: none;
  }
  .button {
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    background: #303030;
    cursor: pointer;
    z-index: 99;
    border-radius: 0px 0px 0px 10px;
  }

  .button .top {
    position: absolute;
    top: 14px;
    left: 10px;
    content: '';
    width: 30px;
    height: 3.5px;
    background: white;
    transition: 0.5s;
  }
  .button .mid {
    position: absolute;
    top: 22px;
    left: 10px;
    content: '';
    width: 30px;
    height: 3.5px;
    background: white;
    transition: 0.7s;
  }
  .button .bot {
    position: absolute;
    top: 30px;
    left: 10px;
    content: '';
    width: 30px;
    height: 3.5px;
    background: white;
    transition: 0.5s;
  }

  .menu {
    margin: auto;
    top: 0px;
    right: 25px;
    width: 80%;
    height: 100px;
    background: rgba(48, 48, 48, 0.8);
    opacity: 0;
    z-index: 1;
    padding: 2rem 0;
    @media (min-width: 768px) {
      right: 40px;
      width: 35%;
    }
    @media (min-width: 1440px) {
      right: 38px;
      width: 41%;
    }
  }

  .menu p {
    text-decoration: none;
    color: white;
    display: block;
    padding: 15px;
    opacity: 0;
    transform: translatex(20px);
    transition: 1s;
  }

  #check:checked ~ .menu p:hover {
    background: #505050;
    transition-delay: 0s;
    transition-duration: 0s;
    transition: 0s;
  }

  #check:checked ~ .menu {
    opacity: 1;
    transform: translatex(-10px);
  }

  #check:checked ~ .menu p {
    opacity: 1;
    transform: translatex(0px);
    text-align: center;
    margin-bottom: -5%;
    margin-top: -4%;
  }

  #check:checked ~ .fondo {
    background: #101010;
    opacity: 0.6;
    height: 100vh;
    transition: 1s;
  }

  #check:checked ~ .menu p:nth-child(1) {
    transition-delay: 0.25s;
  }

  #check:checked ~ .menu p:nth-child(2) {
    transition-delay: 0.5s;
  }

  #check:checked ~ .menu p:nth-child(3) {
    transition-delay: 0.75s;
  }

  #check:checked ~ .menu p:nth-child(4) {
    transition-delay: 1s;
  }

  #check:checked ~ .button .top {
    top: 22px;
    transform: rotate(45deg);
    transition: 0.5s;
  }
  #check:checked ~ .button .mid {
    opacity: 0;
    transition: 0.5s;
  }
  #check:checked ~ .button .bot {
    top: 22px;
    transform: rotate(-45deg);
    transition: 0.5s;
  }

  @media (min-width: 768px) {
    background-image: url('../../../../assets/images/header-desktop.webp');
    background-position: center center;
    background-size: cover;
    align-items: flex-start;
    height: 350px;
  }
  @media (min-width: 1440px) {
    height: 450px;
    background-image: url('../../../../assets/images/header-desktop.webp');
    background-position: center;

    /* flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap; */
  }
`;

export const FilterBarber = styled.p`
  color: var(--color-font-score);
  font-family: var(--font-family-inter-medium);
`;

export const FilterHairdresser = styled.p`
  color: var(--color-font-score);
  font-family: var(--font-family-inter-medium);
`;

export const FilterTatto = styled.p`
  color: var(--color-font-score);
  font-family: var(--font-family-inter-medium);
`;

export const SessionUser = styled.p`
  color: var(--color-font-score);
  font-family: var(--main-font-inter-extra-bold);
  font-size: var(--font-size-s);
  @media (min-width: 1440px) {
    font-size: var(--font-size-l);
  }
`;

export const CloseSession = styled.p`
  color: var(--color-font-score);
  font-family: var(--main-font-inter-extra-bold);
  font-size: var(--font-size-l);
  @media (min-width: 1440px) {
    font-size: var(--font-size-l);
  }
`;

export const Logo = styled.h1`
  text-align: center;
  font-size: 0rem;
  img {
    width: 60%;
  }
  @media (min-width: 768px) {
    text-align: start;
    margin-bottom: 15%;
    img {
      width: 70%;
    }
  }

  @media (min-width: 1440px) {
    align-self: flex-start;
    margin-bottom: 10%;
    img {
      width: 80%;
    }
  }
`;

export const CreateBusiness = styled.button`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  height: 50px;
  width: 40%;
  border: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  min-height: 45px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 5%;
    align-self: center;
  }
  @media (min-width: 1440px) {
    font-size: larger;
    /* margin-bottom: -20%;

    margin-left: 0%; */
  }
`;
