import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Login from './Login';

describe('Given a Login pages', () => {
  test('Render an input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
