import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { userLogin } from '../../auth-slice';

import {
  EmailContainer,
  Form,
  PasswordContainer,
  TextLoginContainer,
} from './FormLoginStyled';

const FormLogin = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Form
        onSubmit={ev => {
          ev.preventDefault();
          dispatch(userLogin(ev.currentTarget));
        }}
      >
        <EmailContainer>
          <label className="login_email" htmlFor="email">
            Dirección de correo electrónico
          </label>
          <input
            className="login_email-input"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
        </EmailContainer>
        <PasswordContainer>
          <label className="login_password" htmlFor="password">
            Contraseña
          </label>
          <input
            className="login_password-input"
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
          />
        </PasswordContainer>
        <button className="login-button" type="submit">
          Iniciar sesión
        </button>
      </Form>
      <TextLoginContainer>
        <p className="login-ask">¿No tienes cuenta?</p>
        <Link className="login-register" to={'/auth/register'}>
          <p>Regístrarse</p>
        </Link>
      </TextLoginContainer>
    </>
  );
};

export default FormLogin;
