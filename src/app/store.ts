import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from '../features/User/auth-slice';
import businessesReducer from '../features/Businesses/businesses-slice';

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    business: businessesReducer,
  },
});

const rootReducer = combineReducers({
  authUser: authReducer,
  business: businessesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
