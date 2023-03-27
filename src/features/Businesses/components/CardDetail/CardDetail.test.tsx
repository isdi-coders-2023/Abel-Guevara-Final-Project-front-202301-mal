import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';

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
});
