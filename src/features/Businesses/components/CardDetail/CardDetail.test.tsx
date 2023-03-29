import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';
import Home from '../../../../pages/Home/Home';
import { APIStatus } from '../../../../shared/states';

import CardDetail from './CardDetail';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a CardDetail component', () => {
  describe('When the id is correct', () => {
    test('Tehn its should show its description', async () => {
      renderWithProviders(
        <MemoryRouter>
          <CardDetail businessId="2023" />
        </MemoryRouter>,
      );

      await waitFor(() => {
        const description = screen.getByRole('paragraph');
        expect(description).toBeInTheDocument();
      });
    });
  });
  describe('When the id is invalid', () => {
    test('Then its should show an error message', async () => {
      server.use(...errorHandlers);
      const invalidId = '20230331';
      renderWithProviders(
        <MemoryRouter>
          <CardDetail businessId={invalidId} />
        </MemoryRouter>,
      );

      await waitFor(() => {
        const error = screen.getByTestId('error-msg');
        expect(error).toBeInTheDocument();
      });
    });
  });

  describe('When the user tries delete her business', () => {
    test('Then its should be deleted', async () => {
      renderWithProviders(
        <MemoryRouter initialEntries={['/delete']}>
          <Routes>
            <Route
              path="/delete"
              element={<CardDetail businessId="2023" />}
            ></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MemoryRouter>,
        {
          preloadedState: {
            authUser: {
              registerState: 'idle',
              statusRes: 'idle',
              status: APIStatus.IDLE,
              loginMsg: '',
              registerMsg: '',
              userEmail: 'pepito@test.com',
            },
            business: {
              businesses: [],
              status: APIStatus.IDLE,
              businessMsg: '',
              businessInfo: 'idle',
              businessDel: 'idle',
              business: {
                _id: '',
                categories: '',
                nameBusiness: '',
                address: '',
                phone: '',
                profileUrl: '',
                description: '',
                reviews: [],
                score: [],
                creator: '',
              },
              businessByIdState: 'idle',
            },
          },
        },
      );

      const deleteBtn = await screen.findByTestId('delete');
      await userEvent.click(deleteBtn);
      const image = await screen.findByRole('img');
      expect(image).toBeInTheDocument();
    });
  });

  describe("When the business can't be deleted", () => {
    test('Then it should show a error', async () => {
      server.use(...errorHandlers);

      renderWithProviders(
        <MemoryRouter>
          <CardDetail businessId="2023" />
        </MemoryRouter>,
        {
          preloadedState: {
            authUser: {
              registerState: 'idle',
              statusRes: 'idle',
              status: APIStatus.IDLE,
              loginMsg: '',
              registerMsg: '',
              userEmail: 'pepito@test.com',
            },
            business: {
              businesses: [],
              status: APIStatus.IDLE,
              businessMsg: '',
              businessInfo: 'idle',
              businessDel: 'idle',
              business: {
                _id: '',
                categories: '',
                nameBusiness: '',
                address: '',
                phone: '',
                profileUrl: '',
                description: '',
                reviews: [],
                score: [],
                creator: '',
              },
              businessByIdState: 'idle',
            },
          },
        },
      );

      const deleteBtn = await screen.findByTestId('delete');
      await userEvent.click(deleteBtn);
      const error = screen.getByTestId('error-message');
      expect(error).toBeInTheDocument();
    });
  });
});
