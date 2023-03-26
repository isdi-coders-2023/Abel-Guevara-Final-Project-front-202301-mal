import { Link, useNavigate } from 'react-router-dom';
import {
  CloseSession,
  CreateBusiness,
  FilterBarber,
  FilterHairdresser,
  FilterTatto,
  HeaderContainer,
  Logo,
  SessionUser,
} from './HeaderStyled';

const Header = () => {
  const navigate = useNavigate();

  const authRegisterSalon = () => {
    const registerSalon =
      sessionStorage.getItem('accessToken') === null
        ? navigate('/auth/login')
        : navigate('/create');
    return registerSalon;
  };

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
          {sessionStorage.getItem('accessToken') === null ? (
            <Link to={'/auth/login'}>
              <SessionUser>Inicie sesión</SessionUser>
            </Link>
          ) : (
            <CloseSession
              role="paragraph"
              onClick={() => sessionStorage.removeItem('accessToken')}
            >
              Cerrar sesión
            </CloseSession>
          )}
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
        <CreateBusiness onClick={() => authRegisterSalon()}>
          ¿Tienes un salón? Regístralo aquí
        </CreateBusiness>
      </HeaderContainer>
    </>
  );
};

export default Header;