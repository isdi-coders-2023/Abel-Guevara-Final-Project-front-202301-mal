import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../mocks/server';
import { renderWithProviders } from '../../../mocks/test-util';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Create from '../../../pages/Create/Create';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a FormBusiness component', () => {
  describe('When the user tries create his bussines', () => {
    test('Then the business should be created', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Su salón se ha creado satisfactoriamente',
        }),
      });
      renderWithProviders(
        <MemoryRouter>
          <Create />
        </MemoryRouter>,
      );

      const inputNameBusiness = screen.getByLabelText('Nombre del salón');
      const inputAddress = screen.getByLabelText('Dirección');
      const inputPhone = screen.getByLabelText('Teléfono');
      const inputDescription = screen.getByLabelText('Descripción');

      await userEvent.selectOptions(screen.getByRole('combobox'), 'Barbería');
      await userEvent.type(inputNameBusiness, 'Barber');
      await userEvent.type(inputAddress, 'La calle');
      await userEvent.type(inputPhone, '123456789');
      await userEvent.upload(
        screen.getByTestId('photo'),
        new File([''], 'salon.jpg'),
      );
      await userEvent.type(inputDescription, 'La mejor');

      await userEvent.click(screen.getByRole('button'));

      expect(
        screen.getByText('Su salón se ha creado satisfactoriamente'),
      ).toBeInTheDocument();
    });
  });

  describe('When the user tries create a business with wrong data', () => {
    test('Then its should recived a error', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({
          msg: 'Ha habido un error, inténtelo de nuevo',
        }),
      });
      renderWithProviders(
        <MemoryRouter>
          <Create />
        </MemoryRouter>,
      );

      const inputNameBusiness = screen.getByLabelText('Nombre del salón');
      const inputAddress = screen.getByLabelText('Dirección');
      const inputPhone = screen.getByLabelText('Teléfono');
      const inputDescription = screen.getByLabelText('Descripción');

      await userEvent.selectOptions(screen.getByRole('combobox'), 'Barbería');
      await userEvent.type(inputNameBusiness, 'Barber');
      await userEvent.type(inputAddress, 'La calle');
      await userEvent.type(inputPhone, '123456789');
      await userEvent.upload(
        screen.getByTestId('photo'),
        new File([''], 'salon.jpg'),
      );
      await userEvent.type(inputDescription, 'La mejor');

      await userEvent.click(screen.getByRole('button'));

      expect(
        screen.getByText('Ha habido un error, inténtelo de nuevo'),
      ).toBeInTheDocument();
    });
  });
});
