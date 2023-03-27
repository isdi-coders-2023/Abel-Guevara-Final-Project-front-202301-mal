import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getByIdBusinessAsync, selectBusinesses } from '../../businesses-slice';
import {
  CardAddress,
  CardAveScore,
  CardContainer,
  CardImg,
  CardImgContainer,
  CardNameBusinnes,
  CardScore,
  ScoreContainer,
} from '../Card/CardStyled';
import {
  ContactText,
  DescriptionText,
  HowAreContainer,
  HowAreText,
  PhoneText,
  ReviewsContainer,
  ReviewText,
  ReviewTitle,
} from './CardDetailStyled';

interface CardDetailProps {
  businessId: string;
}

const CardDetail: FC<CardDetailProps> = ({ businessId }) => {
  const { business } = useAppSelector(selectBusinesses);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getByIdBusinessAsync(businessId));
  }, [dispatch, businessId]);

  const averageCalculeDetail = () => {
    let average;
    if (business.score.length === 0) {
      average = 0;
    } else {
      const accPlus = business.score.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      );
      average = accPlus / business.score.length;
    }
    return average.toFixed(1);
  };

  return (
    <>
      <CardContainer>
        <CardImgContainer>
          <CardImg src={business.profileUrl} alt={business.nameBusiness} />
          <ScoreContainer>
            <CardAveScore role="paragraph">
              {averageCalculeDetail()}
            </CardAveScore>
            <CardScore>{`${business.reviews.length} reseñas`}</CardScore>
          </ScoreContainer>
        </CardImgContainer>
        <CardNameBusinnes>{business.nameBusiness}</CardNameBusinnes>
        <CardAddress>{business.address}</CardAddress>
      </CardContainer>
      <HowAreContainer>
        <HowAreText>QUIENES SOMOS</HowAreText>
        <DescriptionText>{business.description}</DescriptionText>
        <ContactText>CONTACTO</ContactText>
        <PhoneText>{business.phone}</PhoneText>
      </HowAreContainer>
      <ReviewsContainer>
        <ReviewTitle>Reseñas</ReviewTitle>
        <FontAwesomeIcon className="star-detail" icon={solid('star')} />
        <FontAwesomeIcon className="star-detail" icon={solid('star')} />
        <FontAwesomeIcon className="star-detail" icon={solid('star')} />
        <FontAwesomeIcon className="star-detail" icon={solid('star')} />
        <FontAwesomeIcon className="star-detail" icon={solid('star')} />
        <ReviewText>{business.reviews}</ReviewText>
      </ReviewsContainer>
    </>
  );
};

export default CardDetail;
