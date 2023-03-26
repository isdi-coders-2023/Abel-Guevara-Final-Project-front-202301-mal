import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { createBusinessAsync } from '../../../features/Businesses/businesses-slice';
import {
  CategoriesContainer,
  CategoriesSelect,
  CategoriesLabel,
  FormContainer,
  NameContainer,
  NameLabel,
  NameInput,
  AddressContainer,
  AddressLabel,
  AddressInput,
  PhoneContainer,
  PhoneLabel,
  PhoneInput,
  FileContainer,
  FileLabel,
  FileInput,
  DescriptionContainer,
  DescriptionLabel,
  DescriptionTextarea,
  FormButton,
} from './FormBusinessStyled';

const FormBusiness = () => {
  const distpatch = useAppDispatch();

  return (
    <FormContainer
      onSubmit={ev => {
        ev.preventDefault();
        distpatch(createBusinessAsync(ev.currentTarget));
      }}
    >
      <CategoriesContainer>
        <CategoriesLabel htmlFor="categories">Categoría</CategoriesLabel>
        <CategoriesSelect name="categories" id="categories" required>
          <option>Selecciona una categoría</option>
          <option value="barbería">Barbería</option>
          <option value="peluquería">Peluquería</option>
          <option value="tatueje">Tatuaje</option>
        </CategoriesSelect>
      </CategoriesContainer>
      <NameContainer>
        <NameLabel htmlFor="namebusiness">Nombre del salón</NameLabel>
        <NameInput type="text" name="namebusiness" id="namebusiness" required />
      </NameContainer>
      <AddressContainer>
        <AddressLabel htmlFor="address">Dirección</AddressLabel>
        <AddressInput type="text" name="address" id="address" required />
      </AddressContainer>
      <PhoneContainer>
        <PhoneLabel htmlFor="phone">Teléfono</PhoneLabel>
        <PhoneInput type="tel" maxLength={9} name="phone" id="phone" required />
      </PhoneContainer>
      <FileContainer>
        <FileLabel htmlFor="profile" data-testid="photo">
          Foto
        </FileLabel>
        <FileInput
          type="file"
          accept="image/*"
          name="profile"
          id="profile"
          data-testid="barber"
          required
        />
      </FileContainer>
      <DescriptionContainer>
        <DescriptionLabel htmlFor="description">Descripción</DescriptionLabel>
        <DescriptionTextarea name="description" id="description" />
      </DescriptionContainer>
      <FormButton type="submit">Registar</FormButton>
    </FormContainer>
  );
};

export default FormBusiness;
