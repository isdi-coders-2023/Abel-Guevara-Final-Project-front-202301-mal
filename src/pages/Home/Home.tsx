import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectBusinesses,
  getAllBusinessesAsync,
  restoreDeleteStatus,
} from '../../features/Businesses/businesses-slice';
import CardList from '../../features/Businesses/components/CardList/CardList';
import { APIStatus } from '../../shared/states';
import {
  ErrorHome,
  FilterCategoriesText,
  FilterContainer,
  HomeContainer,
  HomeDescription,
  LinkToRegister,
  Loading,
} from './HomeStyled';
import {
  restoreStatusRes,
  selectUserAuth,
} from '../../features/User/auth-slice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { businessDel, businesses, status } = useAppSelector(selectBusinesses);
  const { statusRes } = useAppSelector(selectUserAuth);
  useEffect(() => {
    dispatch(getAllBusinessesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (businessDel === 'success') {
      dispatch(restoreDeleteStatus());
    }
  }, [dispatch, businessDel]);

  useEffect(() => {
    if (statusRes === 'success') {
      dispatch(restoreStatusRes());
    }
  });

  const [listOfBusinesses, setListOfBusinesses] = useState(businesses);
  useEffect(() => {
    setListOfBusinesses(businesses);
  }, [businesses]);
  const filterCategory = (categorie?: string) => {
    const filterBusiness = businesses.filter(business => {
      return business.categories === categorie;
    });

    const resultFilterBusiness =
      categorie === undefined ? businesses : filterBusiness;

    setListOfBusinesses(resultFilterBusiness);
  };

  const homeSatus = () => {
    switch (status) {
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
              <HomeDescription data-testid="home-description">
                {
                  'Conoce todo sobre un salón de belleza antes de cruzar la puerta. Regístrese para seguir la evolución.'
                }
              </HomeDescription>
              <Link to={'/auth/register'}>
                <LinkToRegister>Regístrese</LinkToRegister>
              </Link>
              <FilterContainer>
                <FilterCategoriesText
                  data-testid="barber"
                  onClick={() => filterCategory('Barbería')}
                >
                  Barbería
                </FilterCategoriesText>
                <FilterCategoriesText
                  data-testid="hairdresser"
                  onClick={() => filterCategory('Peluquería')}
                >
                  Peluquería
                </FilterCategoriesText>
                <FilterCategoriesText
                  data-testid="tattos"
                  onClick={() => filterCategory('Tatuajes')}
                >
                  Tatuajes
                </FilterCategoriesText>
              </FilterContainer>
              <FilterCategoriesText
                data-testid="all-businesses"
                onClick={() => filterCategory()}
              >
                Ver todos los salones
              </FilterCategoriesText>
              <CardList businesses={listOfBusinesses} />
            </HomeContainer>
          </>
        );
    }
  };

  return <>{homeSatus()}</>;
};

export default Home;
