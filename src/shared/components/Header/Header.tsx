import { Link } from 'react-router-dom';
import {
  CreateBusiness,
  FilterBarber,
  FilterHairdresser,
  FilterTatto,
  HeaderContainer,
  Logo,
  SessionUser,
} from './HeaderStyled';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <input type="checkbox" id="check" />
        <div className="fondo"></div>
        <label className="button" htmlFor="check">
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bot"></div>
        </label>

        <div className="menu">
          <Link to={'/auth/login'}>
            <SessionUser>Inicie sesión</SessionUser>
          </Link>
          <FilterBarber>Barbería</FilterBarber>
          <FilterHairdresser>Peluquería</FilterHairdresser>
          <FilterTatto>Tatuajes</FilterTatto>
        </div>
        <Logo>
          <img
            src="../../../../assets/images/logo-blanco.png"
            alt="inked-styled"
          />
        </Logo>
        <CreateBusiness>¿Tienes un salón? Regístralo aquí</CreateBusiness>
      </HeaderContainer>
    </>
  );
};

export default Header;
