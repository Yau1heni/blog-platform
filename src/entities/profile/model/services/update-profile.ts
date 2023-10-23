import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigType } from 'app/providers/store-provider';
import { selectProfileForm } from '../selectors/select-profile-form';
import { validateProfile } from '../services/validate-profile';
import { ProfileType, ValidateProfileErrors } from '../types/profile';

export const updateProfile = createAsyncThunk<
  ProfileType,
  void,
  ThunkConfigType<ValidateProfileErrors[]>
  >(
    'profile/updateProfile',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;

      const formData = selectProfileForm(getState());
      const errors = validateProfile(formData);

      if (errors.length) return rejectWithValue(errors);

      try {
        const response = await extra.api.put<ProfileType>('/profile', formData);

        return response.data;
      } catch (e) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    },
  );
