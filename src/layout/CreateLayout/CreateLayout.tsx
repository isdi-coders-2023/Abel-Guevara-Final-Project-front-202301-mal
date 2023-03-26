import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import { LogoInked } from '../../pages/Create/CreateStyled';
import { CreateMain } from './CreateLayoutStyled';

const CreateLayout = () => {
  return (
    <CreateMain>
      <Link to={'/'}>
        <FontAwesomeIcon className="login-house" icon={solid('house')} />
      </Link>
      <LogoInked src="../../../assets/images/logo-negro.png" />
      <Outlet />
    </CreateMain>
  );
};

export default CreateLayout;
