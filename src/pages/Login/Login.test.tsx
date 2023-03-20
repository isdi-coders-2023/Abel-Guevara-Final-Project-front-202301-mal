import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Login from './Login';

describe('Given a Login pages', () => {
  test('Render an image', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
