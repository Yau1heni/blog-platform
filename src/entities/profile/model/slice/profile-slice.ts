import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { fetchProfile } from '../services/fetch-profile';
import { ProfileSchema, ProfileType } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (
        state,
        action: PayloadAction<ProfileType>,
      ) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.isLoading = false;
        state.error = (i18n.t('Неправильное имя пользователя или пароль'));
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
