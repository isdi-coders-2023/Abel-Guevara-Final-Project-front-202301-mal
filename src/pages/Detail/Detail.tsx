import { useParams } from 'react-router-dom';

import CardDetail from '../../features/Businesses/components/CardDetail/CardDetail';
import { DetailContainerPage } from './DetailStyled';

const Detail = () => {
  const { _id } = useParams();
  return (
    <DetailContainerPage>
      <CardDetail businessId={_id ?? ''} />
    </DetailContainerPage>
  );
};

export default Detail;
