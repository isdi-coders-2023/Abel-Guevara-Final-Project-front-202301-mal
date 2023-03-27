import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getByIdBusinessAsync, selectBusinesses } from '../../businesses-slice';
import {
  CardAddress,
  CardContainer,
  CardImg,
  CardImgContainer,
  CardNameBusinnes,
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

  return (
    <>
      <CardContainer>
        <CardImgContainer>
          <CardImg src={business.profileUrl} alt={business.nameBusiness} />
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
