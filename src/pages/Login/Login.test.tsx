import { server } from '../../mocks/server';
import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Login from './Login';
import { renderWithProviders } from '../../mocks/test-util';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a LoginForm component', () => {
  describe('When the user logs in with an existing account', () => {
    test('Dispatches userLogin action on form submission', async () => {
      renderWithProviders(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
      );

      const inputEmail = screen.getByLabelText(
        'Dirección de correo electrónico',
      );
      const inputPassword = screen.getByLabelText('Contraseña');

      await userEvent.type(inputEmail, 'pepito@test.com');
      await userEvent.type(inputPassword, 'password');
      await userEvent.click(screen.getByRole('button'));
      expect(window.location.pathname).toEqual('/');
    });
  });

  describe('When there is an error while logging in', () => {
    test('then the user should receive an error message as feedback', async () => {
      renderWithProviders(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
      );

      const inputEmail = screen.getByLabelText(
        'Dirección de correo electrónico',
      );
      const inputPassword = screen.getByLabelText('Contraseña');
      await userEvent.type(inputEmail, 'pepe@test.com');
      await userEvent.type(inputPassword, 'password');

      await userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(
          screen.getByText('Su correo o contraseña no existe'),
        ).toBeInTheDocument();
      });
    });
  });
});
