import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, UserType } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import i18n from 'i18next';

type LoginPayload = {
  username: string
  password: string
}

export const login = createAsyncThunk<UserType, LoginPayload>(
  'login',
  async (authData, thunkAPI) => {
    try {
      const res = await axios.post<UserType>('http://localhost:8000/login', authData);

      if (!res.data) throw new Error();

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));

      thunkAPI.dispatch(userActions.setAuthData(res.data));
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('ошибка'));
    }
  },
);
