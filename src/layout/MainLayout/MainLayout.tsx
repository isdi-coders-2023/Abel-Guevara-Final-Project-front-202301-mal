import { Outlet } from 'react-router-dom';
import Footer from '../../shared/components/Footer/Footer';
import Header from '../../shared/components/Header/Header';
import { Main } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default MainLayout;
