import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate, NavigateFunction } from 'react-router-dom';
import { renderWithProviders } from '../../../mocks/test-util';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header', () => {
  test('renders logo', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logo = screen.getByAltText('inked-styled');
    expect(logo).toBeInTheDocument();
  });

  test('renders login link when not authenticated', () => {
    sessionStorage.removeItem('accessToken');
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const loginLink = screen.getByText('Inicie sesión');

    expect(loginLink).toBeInTheDocument();
  });

  test('renders logout button when authenticated', async () => {
    sessionStorage.setItem('accessToken', 'fake-token');
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logoutButton = screen.getByText('Cerrar sesión');

    expect(logoutButton).toBeInTheDocument();
  });

  test('navigates to create salon page when "Regístralo aquí" button is clicked', () => {
    const navigateMock = jest.fn() as jest.MockedFunction<NavigateFunction>;
    navigateMock.mockImplementation(() => {});
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const registerButton = screen.getByText(
      '¿Tienes un salón? Regístralo aquí',
    );
    fireEvent.click(registerButton);
    expect(navigateMock).toHaveBeenCalledWith('/create');
  });
  test('navigates to log in page when "Regístralo aquí" button is clicked', async () => {
    sessionStorage.setItem('accessToken', 'fake-token');

    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const closeSesionButton = screen.getByText('Cerrar sesión');

    await userEvent.click(closeSesionButton);

    const logButton = screen.getByRole('button');

    expect(logButton).toBeInTheDocument();
  });

  test('navigates to log in page when "Regístralo aquí" button is clicked and dont have authorization', () => {
    const navigateMock = jest.fn() as jest.MockedFunction<NavigateFunction>;
    navigateMock.mockImplementation(() => {});
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    sessionStorage.getItem('');
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const registerButton = screen.getByText(
      '¿Tienes un salón? Regístralo aquí',
    );
    fireEvent.click(registerButton);
    expect(navigateMock).toHaveBeenCalledWith('/auth/login');
  });
});
