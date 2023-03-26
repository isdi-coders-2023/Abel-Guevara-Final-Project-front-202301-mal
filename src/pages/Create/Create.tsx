import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectBusinesses } from '../../features/Businesses/businesses-slice';
import FormBusiness from '../../shared/components/FormBusiness/FormBusiness';
import {
  CreateSection,
  ErrorInfo,
  GoToHome,
  InfoCreated,
} from './CreateStyled';

const Create = () => {
  const create = useAppSelector(selectBusinesses);

  const createStatus = () => {
    switch (create.businessInfo) {
      case 'success':
        return (
          <>
            <InfoCreated role="paragraph">
              Su salón se ha creado satisfactoriamente
            </InfoCreated>
            <Link to={'/'}>
              <GoToHome>Volver a inicio</GoToHome>
            </Link>
          </>
        );
      case 'error':
        return (
          <>
            <FormBusiness />
            <ErrorInfo>Ha habido un error, inténtelo de nuevo</ErrorInfo>
          </>
        );
      default:
        return <FormBusiness />;
    }
  };

  return <CreateSection>{createStatus()}</CreateSection>;
};

export default Create;
