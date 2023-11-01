import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const addCommentSlice = createSlice({
  name: 'add-comment',
  initialState,
  reducers: {},
  /* extraReducers: (builder) => {
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
  }, */
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
