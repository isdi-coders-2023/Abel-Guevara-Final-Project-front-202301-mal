import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Loading } from '../../../../pages/Home/HomeStyled';
import { APIStatus } from '../../../../shared/states';
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
  ErrorDetail,
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
  const { business, status } = useAppSelector(selectBusinesses);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getByIdBusinessAsync(businessId));
  }, [dispatch, businessId]);

  const detailState = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading src="../../../assets/images/logo-negro.png" />;
      case APIStatus.ERROR:
        return (
          <ErrorDetail data-testid="error-msg">
            {'El salón buscado no existe'}
          </ErrorDetail>
        );
      default:
        return (
          <>
            <CardContainer>
              <CardImgContainer>
                <CardImg
                  src={business.profileUrl}
                  alt={business.nameBusiness}
                />
              </CardImgContainer>
              <CardNameBusinnes>{business.nameBusiness}</CardNameBusinnes>
              <CardAddress>{business.address}</CardAddress>
            </CardContainer>
            <HowAreContainer>
              <HowAreText>QUIENES SOMOS</HowAreText>
              <DescriptionText role="paragraph">
                {business.description}
              </DescriptionText>
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
    }
  };

  return <> {detailState()}</>;
};

export default CardDetail;
