import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfigType } from 'app/providers/store-provider';
import { ProfileType } from '../types/profile';

export const fetchProfile = createAsyncThunk<ProfileType, string, ThunkConfigType<string>>(
  'profile/fetchProfile',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<ProfileType>(`/profile/${profileId}`);

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
