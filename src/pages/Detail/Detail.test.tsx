import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import Detail from './Detail';
import { server } from '../../mocks/server';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a Detail page', () => {
  describe('When this page is rendered', () => {
    test('Then should render a img', () => {
      renderWithProviders(
        <MemoryRouter>
          <Detail />
        </MemoryRouter>,
      );

      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});
