import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { handlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';
import FormRegister from './FormRegister';

describe('Given a Register Formulary', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('When the user tries to register and already exists', () => {
    test('You will then receive an error message', async () => {
      server.use(...handlers);
      renderWithProviders(
        <MemoryRouter>
          <FormRegister />
        </MemoryRouter>,
      );

      await act(
        async () =>
          await userEvent.type(
            screen.getByLabelText('Dirección de correo electrónico'),
            'email@test.com',
          ),
      );

      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(
          screen.getByText('Su usuario ya está registrado'),
        ).toBeInTheDocument();
      });
    });
  });

  describe('When the user tries register', () => {
    test('Then he should be register', async () => {
      server.use(...handlers);
      renderWithProviders(
        <MemoryRouter>
          <FormRegister />
        </MemoryRouter>,
      );
      await act(
        async () =>
          await fireEvent.change(
            screen.getByLabelText('Dirección de correo electrónico'),
            'email2@test.com',
          ),
      );

      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(
          screen.getByText('Su usuario ha sido registrado'),
        ).toBeInTheDocument();
      });
    });
  });
});
