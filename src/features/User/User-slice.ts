import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/api-status';
import { UserLog } from './UserModel';
import { loginUser } from './User-api';

export type LoginStatus = 'idle' | 'success' | 'error';

export interface LoginUser {
  logIn: { accessToken: string };
  statusRes: LoginStatus;
  status: APIStatus;
}

const INITIAL_STATE: LoginUser = {
  logIn: { accessToken: '' },
  statusRes: 'idle',
  status: APIStatus.IDLE,
};

export const userLogin = createAsyncThunk(
  'user/sendUserLog',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const apiRes = await loginUser(user as UserLog);
    return apiRes;
  },
);

export const logSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.status = APIStatus.LOADING;
        state.statusRes = 'idle';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.statusRes = 'success';
        state.logIn = action.payload;
      })
      .addCase(userLogin.rejected, state => {
        state.status = APIStatus.ERROR;
        state.statusRes = 'error';
      });
  },
});

export const selectUserLogin = (state: RootState) => state.userLog;

export default logSlice.reducer;
