import { server } from '../../mocks/server';
import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { renderWithProviders } from '../../mocks/test-util';
import Home from '../Home/Home';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a LoginForm component', () => {
  describe('When the user logs in with an existing account', () => {
    test('Dispatches userLogin action on form submission', async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MemoryRouter>,
      );

      const inputEmail = screen.getByLabelText(
        'Dirección de correo electrónico',
      );
      const inputPassword = screen.getByLabelText('Contraseña');

      await userEvent.type(inputEmail, 'pepito@test.com');
      await userEvent.type(inputPassword, 'password');
      await userEvent.click(screen.getByRole('button'));

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
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
