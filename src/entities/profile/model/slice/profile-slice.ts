import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { updateProfile } from '../services/update-profile';
import { fetchProfile } from '../services/fetch-profile';
import { ProfileSchema, ProfileType } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<{readonly: boolean}>) => {
      state.readonly = action.payload.readonly;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
    updateProfile: (state, action: PayloadAction<{data: ProfileType}>) => {
      state.form = {
        ...state.form,
        ...action.payload.data,
      };
    },
  },
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
        state.form = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.isLoading = false;
        state.error = (i18n.t('Неправильное имя пользователя или пароль'));
      })
      .addCase(updateProfile.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (
        state,
        action: PayloadAction<ProfileType>,
      ) => {
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.isLoading = false;
        state.validateErrors = undefined;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
