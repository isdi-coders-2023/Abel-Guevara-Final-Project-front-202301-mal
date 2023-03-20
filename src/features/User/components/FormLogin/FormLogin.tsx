import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectUserAuth, userLogin } from '../../auth-slice';

import {
  EmailContainer,
  Form,
  PasswordContainer,
  TextLoginContainer,
} from './FormLoginStyled';

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const { statusRes } = useAppSelector(selectUserAuth);
  const message = () => {
    if (statusRes === 'success') {
      return 'Usted ha sido logueado';
    }
    if (statusRes === 'error') {
      return 'Ha habido un error, inténtelo nuevamente';
    }
  };

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
            required
          />
        </PasswordContainer>
        <button className="login-button" type="submit">
          Iniciar sesión
        </button>
      </Form>
      <TextLoginContainer>
        <p className="login-ask">¿No tienes cuenta?</p>
        <p className="login-register">Regístrarse</p>
      </TextLoginContainer>
      <p role="paragraph" className="form-message">
        {message()}
      </p>
    </>
  );
};

export default FormLogin;