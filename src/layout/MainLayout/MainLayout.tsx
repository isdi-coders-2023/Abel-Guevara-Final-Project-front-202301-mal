import { Outlet } from 'react-router-dom';
import { Main } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default MainLayout;
