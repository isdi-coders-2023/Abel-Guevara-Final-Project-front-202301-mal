import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectBusinesses,
  getAllBusinessesAsync,
} from '../../features/Businesses/businesses-slice';
import CardList from '../../features/Businesses/components/CardList/CardList';
import { APIStatus } from '../../shared/states';
import {
  ErrorHome,
  HomeContainer,
  HomeDescription,
  LinkToRegister,
  Loading,
} from './HomeStyled';
import { restoreDeleteStatus } from '../../features/Businesses/businesses-slice';

const Home = () => {
  const homeState = useAppSelector(selectBusinesses);
  const dispatch = useAppDispatch();
  const businessesState = useAppSelector(selectBusinesses);
  const { businessDel } = useAppSelector(selectBusinesses);
  useEffect(() => {
    dispatch(getAllBusinessesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (businessDel === 'success') {
      dispatch(restoreDeleteStatus());
    }
  }, [dispatch, businessDel]);

  const homeSatus = () => {
    switch (homeState.status) {
      case APIStatus.LOADING:
        return <Loading src="../../../assets/images/logo-negro.png" />;

      case APIStatus.ERROR:
        return (
          <ErrorHome role="paragraph">No hay salones para mostrar</ErrorHome>
        );
      default:
        return (
          <>
            <HomeContainer>
              <HomeDescription>
                {
                  'Conoce todo sobre un salón de belleza antes de cruzar la puerta. Regístrese para seguir la evolución.'
                }
              </HomeDescription>
              <Link to={'/auth/register'}>
                <LinkToRegister>Regístrese</LinkToRegister>
              </Link>
              <CardList businesses={businessesState.businesses} />
            </HomeContainer>
          </>
        );
    }
  };

  return <>{homeSatus()}</>;
};

export default Home;
