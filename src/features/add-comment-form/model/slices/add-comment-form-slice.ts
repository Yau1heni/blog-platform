import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/add-comment-form';

const initialState:AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'add-comment-form',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<{text: string}>) => {
      state.text = action.payload.text;
    },
  },
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

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
