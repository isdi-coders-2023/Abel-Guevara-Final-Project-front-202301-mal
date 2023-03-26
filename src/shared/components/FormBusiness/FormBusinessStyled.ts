import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: grid;
    width: 80%;
  }
  input,
  textarea,
  select {
    fill: Solid rgba(251, 248, 248, 0.5);
    border-radius: 5px;
    border-style: none;
    margin-bottom: 5%;
    padding-left: 7px;
    padding-right: 7px;
  }
  label {
    font-family: var(--main-font-inter-extra-bold);
    font-size: var(--font-size-xs);
    margin-bottom: 2%;
  }
`;

export const CategoriesContainer = styled.div``;

export const CategoriesLabel = styled.label``;

export const CategoriesSelect = styled.select`
  height: 30px;
  font-family: var(--font-family-inter-regular);
  font-size: 0.8rem;
`;

export const NameContainer = styled.div``;

export const NameLabel = styled.label``;

export const NameInput = styled.input`
  height: 25px;
`;

export const AddressContainer = styled.div``;

export const AddressLabel = styled.label``;

export const AddressInput = styled.input`
  height: 25px;
`;

export const PhoneContainer = styled.div``;

export const PhoneLabel = styled.label``;

export const PhoneInput = styled.input`
  height: 25px;
`;

export const FileContainer = styled.div``;

export const FileLabel = styled.label``;

export const FileInput = styled.input``;

export const DescriptionContainer = styled.div``;

export const DescriptionLabel = styled.label``;

export const DescriptionTextarea = styled.textarea`
  height: 70px;
  margin-bottom: 7%;
`;

export const FormButton = styled.button`
  fill: Solid rgba(251, 248, 248, 0.5);
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 6px;
  offset: 0px, 4px rgba(0, 0, 0, 0.25);
  width: 35%;
  height: 30px;
`;
