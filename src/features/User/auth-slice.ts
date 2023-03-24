import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/api-status';
import { loginUser, registerUser } from './auth-api';
import UserModel, { UserLog } from './UserModel';

export type AuthStatus = 'idle' | 'success' | 'error';

export interface AuthFormUser {
  registerState: AuthStatus;
  statusRes: AuthStatus;
  status: APIStatus;
  loginMsg: string;
  registerMsg: string;
}

const INITIAL_STATE: AuthFormUser = {
  registerState: 'idle',
  statusRes: 'idle',
  status: APIStatus.IDLE,
  loginMsg: '',
  registerMsg: '',
};

export const userRegister = createAsyncThunk(
  'userRegister/sendUserRegister',
  async (registerForm: HTMLFormElement) => {
    const formData = new FormData(registerForm);
    const user = Object.fromEntries(formData.entries());
    const registerRes = await registerUser(user as UserModel);
    return registerRes;
  },
);

export const userLogin = createAsyncThunk(
  'userLogin/sendUserLog',
  async (loginForm: HTMLFormElement) => {
    const formData = new FormData(loginForm);
    const user = Object.fromEntries(formData.entries());
    const apiRes = await loginUser(user as UserLog);
    return apiRes;
  },
);

export const logSlice = createSlice({
  name: 'authUser',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userRegister.pending, state => {
        state.status = APIStatus.LOADING;
        state.registerState = 'idle';
      })
      .addCase(userRegister.fulfilled, state => {
        state.status = APIStatus.IDLE;
        state.registerState = 'success';
      })
      .addCase(userRegister.rejected, (state, action: any) => {
        state.status = APIStatus.ERROR;
        state.registerState = 'error';
        state.registerMsg = action.error.message;
      })
      .addCase(userLogin.pending, state => {
        state.status = APIStatus.LOADING;
        state.statusRes = 'idle';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.statusRes = 'success';
        sessionStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(userLogin.rejected, (state, action: any) => {
        state.status = APIStatus.ERROR;
        state.statusRes = 'error';
        state.loginMsg = action.error.message;
      });
  },
});

export const selectUserAuth = (state: RootState) => state.authUser;

export default logSlice.reducer;
