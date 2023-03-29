import { MemoryRouter } from 'react-router-dom';
import { server } from '../../mocks/server';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../mocks/test-util';
import Home from './Home';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a home page', () => {
  describe('When the user clicks on a filter', () => {
    test('Then the user should see the filtered businesses', async () => {
      renderWithProviders(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      );

      const filterBarber = await screen.findByTestId('barber');
      const filterHairdresser = await screen.findByTestId('hairdresser');
      const filterTatto = await screen.findByTestId('tattos');
      const filterAll = await screen.findByTestId('all-businesses');

      await userEvent.click(filterBarber);
      await userEvent.click(filterHairdresser);
      await userEvent.click(filterTatto);
      await userEvent.click(filterAll);

      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });
  });
});
