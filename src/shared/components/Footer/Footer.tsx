import { Link } from 'react-router-dom';
import {
  Contact,
  FooterContainer,
  HowAre,
  InfoContainer,
  SocialRedContainer,
} from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <HowAre>Quienes Somos</HowAre>
        <Contact>Contacto</Contact>
      </InfoContainer>
      <SocialRedContainer>
        <Link to={'https://www.facebook.com/abel.guevaralanda'}>
          <img
            src="../../../../assets/images/facebook.svg"
            alt="icon-facebook"
          />
        </Link>
        <Link to={'https://www.instagram.com/abelg_dev/'}>
          <img
            src="../../../../assets/images/instagram.svg"
            alt="icon-facebook"
          />
        </Link>
      </SocialRedContainer>
    </FooterContainer>
  );
};

export default Footer;
