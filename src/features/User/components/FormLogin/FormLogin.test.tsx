import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { server } from '../../../../mocks/server';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { handlers } from '../../../../mocks/handlers';
import userEvent from '@testing-library/user-event';
import FormLogin from './FormLogin';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a LoginForm component', () => {
  describe('When the user logs in with an existing account', () => {
    test('Dispatches userLogin action on form submission', async () => {
      server.use(...handlers);
      render(
        <Provider store={store}>
          <MemoryRouter>
            <FormLogin />
          </MemoryRouter>
        </Provider>,
      );
      const label = screen.getByLabelText('Dirección de correo electrónico');

      await userEvent.type(label, 'pepito@test.com');

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByText('Usted ha sido logueado')).toBeInTheDocument();
    });
  });
});
