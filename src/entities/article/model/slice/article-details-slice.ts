import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { fetchArticle } from '../services/fetch-article';
import { ArticleDetailsSchema } from '../types/article-details';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  isLoading: true,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticle.fulfilled, (
        state,
        action: PayloadAction<Article>,
      ) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticle.rejected, (state) => {
        state.isLoading = false;
        state.error = (i18n.t('Неправильное имя пользователя или пароль'));
      });
  },
});

export const { actions: articleActions } = articleDetailsSlice;
export const { reducer: articleReducer } = articleDetailsSlice;
