import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import AuthLayout from './AuthLayout';

describe('Given a Login pages', () => {
  test('Render an image', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AuthLayout />
        </MemoryRouter>
      </Provider>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
