import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';

import { Loading } from '../../../../pages/Home/HomeStyled';

import { selectUserAuth } from '../../../User/auth-slice';
import {
  deleteBusinessAsync,
  getByIdBusinessAsync,
  selectBusinesses,
} from '../../businesses-slice';
import {
  CardAddress,
  CardContainer,
  CardImg,
  CardImgContainer,
  CardNameBusinnes,
} from '../Card/CardStyled';
import {
  ContactText,
  DeleteButton,
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
  const { business, businessDel, businessByIdState } =
    useAppSelector(selectBusinesses);
  const { userEmail } = useAppSelector(selectUserAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getByIdBusinessAsync(businessId));
  }, [dispatch, businessId]);

  const deleteButton = () => {
    switch (businessDel) {
      case 'success':
        return (
          <>
            <Navigate to={'/'} />
          </>
        );
      case 'error':
        return (
          <ErrorDetail data-testid="error-message">
            {'Su salòn no se ha podido eliminar'}
          </ErrorDetail>
        );
      default:
        if (userEmail === business.creator) {
          return (
            <DeleteButton
              data-testid="delete"
              onClick={() => {
                dispatch(deleteBusinessAsync(businessId));
              }}
            >
              <FontAwesomeIcon icon={solid('scissors')} rotation={180} />
            </DeleteButton>
          );
        }
    }
  };

  const detailState = () => {
    switch (businessByIdState) {
      case 'idle':
        return <Loading src="../../../assets/images/logo-negro.png" />;
      case 'error':
        return (
          <ErrorDetail data-testid="error-msg">
            {'El salón buscado no existe'}
          </ErrorDetail>
        );
      default:
        return (
          <>
            <CardContainer>
              <Link to={'/'}>
                <FontAwesomeIcon
                  className="back-home"
                  icon={solid('circle-arrow-left')}
                />
              </Link>
              <CardImgContainer>
                <>{deleteButton()}</>
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
