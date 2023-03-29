import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/states';
import getAllBusinesses, {
  createBusiness,
  deleteBusiness,
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
  businessDel: BusinessState;
  businessByIdState: BusinessState;
}

const INITIAL_STATE: BusinessesState = {
  businesses: [],
  businessByIdState: 'idle',
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
  businessDel: 'idle',
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

export const deleteBusinessAsync = createAsyncThunk(
  `${STATE_NAME}/deleteBusiness`,
  async (id: string) => {
    const apiRes = await deleteBusiness(id);
    return apiRes;
  },
);

export const businessesSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    restoreDeleteStatus: state => {
      state.businessDel = 'idle';
    },
  },

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
        state.businessByIdState = 'idle';
      })
      .addCase(getByIdBusinessAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.business = action.payload as Business;
        state.businessByIdState = 'success';
      })
      .addCase(getByIdBusinessAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.businessByIdState = 'error';
      });
    builder
      .addCase(deleteBusinessAsync.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(deleteBusinessAsync.fulfilled, state => {
        state.status = APIStatus.IDLE;
        state.businessDel = 'success';
      })
      .addCase(deleteBusinessAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.businessDel = 'error';
      });
  },
});

export const selectBusinesses = (state: RootState) => state.business;
export const { restoreDeleteStatus } = businessesSlice.actions;
export default businessesSlice.reducer;
