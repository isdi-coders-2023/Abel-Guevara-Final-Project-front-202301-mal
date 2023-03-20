import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectUserAuth, userLogin } from '../../auth-slice';
import { ErrorMessage } from '../../../../pages/Login/LoginStyled';
import {
  EmailContainer,
  Form,
  PasswordContainer,
  TextLoginContainer,
} from './FormLoginStyled';

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(selectUserAuth);
  const { loginMsg } = useAppSelector(selectUserAuth);

  const FormLog = (
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

  const loginStatus = () => {
    switch (login.statusRes) {
      case 'success':
        return (
          <>
            <p role="paragraph">Usted ha sido logueado</p>
            <Navigate to={'/'} />
          </>
        );
      case 'error':
        return (
          <>
            {FormLog}
            <ErrorMessage role="paragraph">{loginMsg}</ErrorMessage>
          </>
        );
      default:
        return <>{FormLog}</>;
    }
  };

  return <>{loginStatus()}</>;
};

export default FormLogin;
