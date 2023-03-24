import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/api-status';
import getAllBusinesses from './businesses-api';
import Business from './businesses-model';

const STATE_NAME = 'businesses';

export interface BusinessesState {
  businesses: Business[];
  status: APIStatus;
  businessMsg: string;
}

const INITIAL_STATE: BusinessesState = {
  businesses: [],
  status: APIStatus.IDLE,
  businessMsg: '',
};

export const getAllBusinessesAsync = createAsyncThunk(
  `${STATE_NAME}/getAllBusiness`,
  async () => {
    const apiRes = await getAllBusinesses();

    return apiRes;
  },
);

export const businessesSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},

  extraReducers: builder => {
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
