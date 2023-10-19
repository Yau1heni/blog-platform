import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserType } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/local-storage';
import i18n from 'i18next';
import { ThunkConfigType } from 'app/providers/store-provider';
import { RoutePath } from 'shared/config/route-config/route-config';

type LoginPayload = {
  username?: string
  password?: string
}

export const login = createAsyncThunk<UserType, LoginPayload, ThunkConfigType<string>>(
  'login',
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const res = await extra.api.post<UserType>('/login', authData);

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));

      dispatch(userActions.setAuthData(res.data));
      extra.navigate?.(RoutePath.profile);
      return res.data;
    } catch (e) {
      return rejectWithValue(i18n.t('ошибка'));
    }
  },
);
