import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { renderWithProviders } from '../../mocks/test-util';
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
  // test('When the component its loading, then show spinner', () => {
  //   renderWithProviders(
  //     <MemoryRouter>
  //       <AuthLayout />
  //     </MemoryRouter>,
  //   );

  //   userEvent.click(screen.getByRole('button'));
  //   expect(screen.getByTestId('spinner')).toBeInTheDocument();
  // });
});
