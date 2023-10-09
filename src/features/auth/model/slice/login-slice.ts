import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { LoginSchema } from '../types/login-schema';
import { login } from '../../model/services/login/login';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<{username: string}>) => {
      state.username = action.payload.username;
    },
    setPassword: (state, action: PayloadAction<{password: string}>) => {
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = (i18n.t('Неправильное имя пользователя или пароль'));
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
