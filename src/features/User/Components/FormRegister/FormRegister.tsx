import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  BackHome,
  RegisterContainer,
  UserRegister,
} from '../../../../pages/Register/RegisterStyled';
import { selectUserAuth, userRegister } from '../../auth-slice';
import {
  EmailContainer,
  EmailInput,
  EmailLabel,
  NameContainer,
  NameInput,
  NameLabel,
  PasswordContainer,
  PasswordInput,
  PasswordLabel,
  RegisterButton,
  RegisterForm,
  SurNameContainer,
  SurNameInput,
  SurNameLabel,
} from './FormRegisterStyled';

const FormRegister = () => {
  const dispatch = useAppDispatch();
  const register = useAppSelector(selectUserAuth);
  const { registerMsg } = useAppSelector(selectUserAuth);

  const formRegister = (
    <>
      <RegisterForm
        onSubmit={ev => {
          ev.preventDefault();
          dispatch(userRegister(ev.currentTarget));
        }}
      >
        <NameContainer>
          <NameLabel htmlFor="name">Nombre</NameLabel>
          <NameInput type="text" name="name" id="name" required />
        </NameContainer>
        <SurNameContainer>
          <SurNameLabel htmlFor="surname">Apellidos</SurNameLabel>
          <SurNameInput type="text" name="surname" id="sur-name" required />
        </SurNameContainer>
        <EmailContainer>
          <EmailLabel htmlFor="email">
            Dirección de correo electrónico
          </EmailLabel>
          <EmailInput type="email" name="email" id="email" required />
        </EmailContainer>
        <PasswordContainer>
          <PasswordLabel htmlFor="password">Contraseña</PasswordLabel>
          <PasswordInput
            type="password"
            name="password"
            id="password"
            required
          />
        </PasswordContainer>
        <RegisterButton type="submit">Registrarse</RegisterButton>
      </RegisterForm>
    </>
  );
  const registerStatus = () => {
    switch (register.registerState) {
      case 'success':
        return (
          <RegisterContainer>
            <UserRegister>{'Su usuario ha sido registrado'}</UserRegister>
            <Link to={'/'}>
              <BackHome>{'Volver a inicio'}</BackHome>
            </Link>
          </RegisterContainer>
        );
      case 'error':
        return (
          <>
            {formRegister}
            <p data-testid="paragraph">{registerMsg}</p>
          </>
        );
      default:
        return <>{formRegister}</>;
    }
  };

  return <>{registerStatus()}</>;
};

export default FormRegister;
