import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUserAuth } from '../../features/User/auth-slice';
import { APIStatus } from '../../shared/states';
import {
  FormLogoContainer,
  HeadContainer,
  LoginContainer,
  Spinner,
} from './AuthLayoutStyled';

const AuthLayout = () => {
  const { status } = useAppSelector(selectUserAuth);

  return (
    <LoginContainer>
      <HeadContainer>
        <Link to={'/'}>
          <FontAwesomeIcon className="login-house" icon={solid('house')} />
        </Link>
      </HeadContainer>
      <FormLogoContainer>
        <img
          className="login-logo"
          src="../../../assets/images/logo-negro.png"
          alt="inked and styled"
        />
        {status === APIStatus.LOADING ? (
          <Spinner data-testid="spinner-element" />
        ) : (
          <Outlet />
        )}
      </FormLogoContainer>
    </LoginContainer>
  );
};

export default AuthLayout;
