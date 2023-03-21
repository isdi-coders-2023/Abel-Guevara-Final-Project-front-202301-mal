import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUserAuth } from '../../features/User/auth-slice';
import FormLogin from '../../features/User/components/FormLogin/FormLogin';
import { ErrorMessage } from './LoginStyled';

const Login = () => {
  const login = useAppSelector(selectUserAuth);
  const { loginMsg } = useAppSelector(selectUserAuth);

  const loginStatus = () => {
    switch (login.statusRes) {
      case 'success':
        return (
          <>
            <Navigate to={'/'} />
          </>
        );
      case 'error':
        return (
          <>
            <FormLogin />
            <ErrorMessage>{loginMsg}</ErrorMessage>
          </>
        );
      default:
        return (
          <>
            <FormLogin />
          </>
        );
    }
  };
  return <>{loginStatus()}</>;
};

export default Login;
