import {
  FormLogoContainer,
  HeadContainer,
  LoginContainer,
} from './Login-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FormLogin from '../../features/User/Components/FormLogin/FormLogin';
const Login = () => {
  return (
    <LoginContainer>
      <HeadContainer>
        <FontAwesomeIcon className="login-house" icon={solid('house')} />
      </HeadContainer>
      <FormLogoContainer>
        <img
          className="login-logo"
          src="../../../assets/images/logo-negro.png"
          alt="inked and styled"
        />
        <FormLogin />
      </FormLogoContainer>
    </LoginContainer>
  );
};

export default Login;
