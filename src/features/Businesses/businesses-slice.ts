import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/states';
import getAllBusinesses, { createBusiness } from './businesses-api';
import Business from './businesses-model';

const STATE_NAME = 'businesses';
export type BusinessState = 'idle' | 'success' | 'error';
export interface BusinessesState {
  businesses: Business[];
  status: APIStatus;
  businessMsg: string;
  businessInfo: BusinessState;
}

const INITIAL_STATE: BusinessesState = {
  businesses: [],
  status: APIStatus.IDLE,
  businessMsg: '',
  businessInfo: 'idle',
};

export const getAllBusinessesAsync = createAsyncThunk(
  `${STATE_NAME}/getAllBusiness`,
  async () => {
    const apiRes = await getAllBusinesses();

    return apiRes;
  },
);

export const createBusinessAsync = createAsyncThunk(
  `${STATE_NAME}/createBusiness`,
  async (businessForm: HTMLFormElement) => {
    const formData = new FormData(businessForm);
    const createBusinessRes = await createBusiness(formData);

    return createBusinessRes;
  },
);

export const businessesSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(createBusinessAsync.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(createBusinessAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.businessInfo = 'success';
      })
      .addCase(createBusinessAsync.rejected, state => {
        state.status = APIStatus.ERROR;
        state.businessInfo = 'error';
      });
    builder
      .addCase(getAllBusinessesAsync.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(getAllBusinessesAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.businesses = action.payload.businesses;
      })
      .addCase(getAllBusinessesAsync.rejected, state => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectBusinesses = (state: RootState) => state.business;

export default businessesSlice.reducer;
