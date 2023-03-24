import { FC } from 'react';
import Business from '../../businesses-model';
import Card from '../Card/Card';
import { BusinessesListContainer } from './CardListStyled';

interface CardListProps {
  businesses: Business[];
}
const CardList: FC<CardListProps> = ({ businesses }) => {
  return (
    <BusinessesListContainer>
      {businesses.map(business => (
        <li className="business-list" key={business._id}>
          <Card businesses={business} />
        </li>
      ))}
    </BusinessesListContainer>
  );
};

export default CardList;
