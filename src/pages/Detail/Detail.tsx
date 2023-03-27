import { useParams } from 'react-router-dom';

import CardDetail from '../../features/Businesses/components/CardDetail/CardDetail';

const Detail = () => {
  const { _id } = useParams();
  return (
    <div>
      <CardDetail businessId={_id ?? ''} />
    </div>
  );
};

export default Detail;
