import { FC } from 'react';
import { Link } from 'react-router-dom';
import Business from '../../businesses-model';
import {
  CardAddress,
  CardAveScore,
  CardContainer,
  CardImg,
  CardImgContainer,
  CardNameBusinnes,
  CardScore,
  ScoreContainer,
} from './CardStyled';

interface CardProps {
  businesses: Business;
}

const Card: FC<CardProps> = ({ businesses }) => {
  const { _id } = businesses;
  const averageCalcule = () => {
    let average;
    if (businesses.score.length === 0) {
      average = 0;
    } else {
      const accPlus = businesses.score.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      );
      average = accPlus / businesses.score.length;
    }
    return average.toFixed(1);
  };

  return (
    <CardContainer>
      <Link className="detail-link" to={`/detail/${_id}`}>
        <CardImgContainer>
          <CardImg src={businesses.profileUrl} alt={businesses.nameBusiness} />
          <ScoreContainer>
            <CardAveScore role="paragraph">{averageCalcule()}</CardAveScore>
            <CardScore>{`${businesses.reviews.length} reseñas`}</CardScore>
          </ScoreContainer>
        </CardImgContainer>
        <CardNameBusinnes>{businesses.nameBusiness}</CardNameBusinnes>
        <CardAddress>{businesses.address}</CardAddress>
      </Link>
    </CardContainer>
  );
};

export default Card;
