import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers, handlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';
import Home from '../../../../pages/Home/Home';
import { rest } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a BusinessesList component', () => {
  describe('When component loads and API responds with business', () => {
    test('Then it should show loading and after response should render the list', async () => {
      server.use(...handlers);
      renderWithProviders(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      );

      await waitFor(async () => {
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(1);
      });
    });
  });
  describe('When component loads and API responds with error', () => {
    test('Then it should show loading and after response should render the error message', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      );

      await waitFor(async () => {
        const errorMessage = screen.getByRole('paragraph');
        expect(errorMessage).toHaveTextContent('No hay salones para mostrar');
      });
    });
  });

  describe('When the component loads and API responds with the property score empty', () => {
    test('Then average is equal 0', async () => {
      server.use(
        rest.get(
          'https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business',
          (_req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json([
                {
                  _id: '6419aa15b7698638cc0f3da7',
                  categories: 'Barbería',
                  nameBusiness: "La Habana 50's",
                  address: 'Calle Obispo Bartolomé Espejo, 17, 29014, Málaga',
                  phone: '697695015',
                  profileUrl:
                    'https://pvrpvjohhofutktrueiu.supabase.co/storage/v1/object/public/business/undefined1679403399044Habana%2050.jpeg',
                  description: 'La mejor barber',
                  reviews: ['muy bien atendido'],
                  score: [],
                },
              ]),
            );
          },
        ),
      );
      renderWithProviders(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      );
      const average = await screen.findByText('0.0');
      expect(average).toBeInTheDocument();
    });
  });
});
