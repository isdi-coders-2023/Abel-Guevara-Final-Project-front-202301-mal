import { Link } from 'react-router-dom';
import {
  HomeContainer,
  HomeDescription,
  HomeTitle,
  LinkToRegister,
} from './HomeStyled';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTitle>Bienvenido a Inked & Styled</HomeTitle>
        <HomeDescription>
          {
            'Esta es una aplicación de reseñas de salones de belleza, en breve podrá disfrutar de su contenido. Regístrese para seguir la evolución.'
          }
        </HomeDescription>
        <Link to={'/auth/register'}>
          <LinkToRegister>Regístrese</LinkToRegister>
        </Link>
      </HomeContainer>
    </>
  );
};

export default Home;
