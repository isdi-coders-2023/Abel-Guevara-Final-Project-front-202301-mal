import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/states';
import { loginUser, registerUser } from './auth-api';
import UserModel, { UserLog } from './UserModel';

export type AuthStatus = 'idle' | 'success' | 'error';

export interface AuthFormUser {
  registerState: AuthStatus;
  statusRes: AuthStatus;
  status: APIStatus;
  loginMsg: string;
  registerMsg: string;
  userEmail: string;
}

const INITIAL_STATE: AuthFormUser = {
  registerState: 'idle',
  statusRes: 'idle',
  status: APIStatus.IDLE,
  loginMsg: '',
  registerMsg: '',
  userEmail: '',
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
    const userInfo = {
      apiRes,
      userEmail: user.email.toString(),
    };
    return userInfo;
  },
);

export const logSlice = createSlice({
  name: 'authUser',
  initialState: INITIAL_STATE,
  reducers: {
    restoreuserEmail: state => {
      state.userEmail = '';
      sessionStorage.removeItem('accessToken');
    },
    restoreStatusRes: state => {
      state.statusRes = 'idle';
    },
  },
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
        //state.statusRes = 'idle';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.statusRes = 'success';
        state.userEmail = action.payload.userEmail;
        sessionStorage.setItem(
          'accessToken',
          action.payload.apiRes.accessToken,
        );
      })
      .addCase(userLogin.rejected, (state, action: any) => {
        state.status = APIStatus.ERROR;
        state.statusRes = 'error';
        state.loginMsg = action.error.message;
      });
  },
});

export const selectUserAuth = (state: RootState) => state.authUser;
export const { restoreuserEmail, restoreStatusRes } = logSlice.actions;
export default logSlice.reducer;
