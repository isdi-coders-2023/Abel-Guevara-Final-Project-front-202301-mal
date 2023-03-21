import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';

import FormLogin from './FormLogin';

describe('Given a Login pages', () => {
  test('Render an input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormLogin />
        </MemoryRouter>
      </Provider>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
