import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { APIStatus } from '../shared/states';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      authUser: {
        registerState: 'idle',
        statusRes: 'idle',
        status: APIStatus.IDLE,
        loginMsg: '',
        registerMsg: '',
      },
      business: {
        businesses: [],
        status: APIStatus.IDLE,
        businessMsg: '',
        businessInfo: 'idle',
        business: {
          _id: '',
          categories: '',
          nameBusiness: '',
          address: '',
          phone: '',
          profileUrl: '',
          description: '',
          reviews: [],
          score: [],
          creator: '',
        },
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
