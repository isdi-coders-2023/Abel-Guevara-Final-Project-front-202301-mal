import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/states';
import getAllBusinesses, {
  createBusiness,
  getByIdBusiness,
} from './businesses-api';
import Business from './businesses-model';

const STATE_NAME = 'businesses';
export type BusinessState = 'idle' | 'success' | 'error';
export interface BusinessesState {
  businesses: Business[];
  business: Business;
  status: APIStatus;
  businessMsg: string;
  businessInfo: BusinessState;
}

const INITIAL_STATE: BusinessesState = {
  businesses: [],
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

export const getByIdBusinessAsync = createAsyncThunk(
  `${STATE_NAME}/getByIdBusiness`,
  async (id: string) => {
    const apiRes = await getByIdBusiness(id);

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
    builder
      .addCase(getByIdBusinessAsync.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(getByIdBusinessAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.business = action.payload as Business;
      })
      .addCase(getByIdBusinessAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectBusinesses = (state: RootState) => state.business;

export default businessesSlice.reducer;
