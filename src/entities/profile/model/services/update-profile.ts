import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigType } from 'app/providers/store-provider';
import { selectProfileForm } from 'entities/profile';
import { ProfileType } from '../types/profile';

export const updateProfile = createAsyncThunk<ProfileType, void, ThunkConfigType<string>>(
  'profile/updateProfile',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = selectProfileForm(getState());

    try {
      const response = await extra.api.put<ProfileType>('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
