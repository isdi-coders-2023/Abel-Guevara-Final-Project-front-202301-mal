import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import FormLogin from './Components/FormLogin/FormLogin';
import { render, waitFor, screen } from '@testing-library/react';
import { errorHandlers, handlers } from '../../mocks/handlers';

describe('Given a LoginForm component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  describe('When the user logs in with an existing account', () => {
    test('Then receive the message you have been successfully logged in.', async () => {
      server.use(...handlers);
      render(
        <Provider store={store}>
          <FormLogin />
        </Provider>,
      );
      const submitButton = screen.getByRole('button');
      userEvent.click(submitButton);
      const paragraph = screen.getByRole('paragraph');
      await waitFor(() => {
        expect(paragraph).toHaveTextContent('Usted ha sido logueado');
      });
    });
  });
  describe('When the user wants to log in with incorrect data', () => {
    test('Then receive an error message', async () => {
      server.use(...errorHandlers);
      render(
        <Provider store={store}>
          <FormLogin />
        </Provider>,
      );
      const submitButton = screen.getByRole('button');
      userEvent.click(submitButton);
      const paragraph = screen.getByRole('paragraph');
      await waitFor(() => {
        expect(paragraph).toHaveTextContent(
          'Ha habido un error, inténtelo nuevamente',
        );
      });
    });
  });
});
