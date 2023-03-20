import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { server } from '../../mocks/server';

import Register from './Register';

describe('Given a Login pages', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('Render an image', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
