import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';
import { StateSchema } from 'app/providers/store-provider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/local-storage';
import { fetchArticlesList } from '../services/fetch-articles-list';
import { ArticlesPageSchema } from '../types/articles-page-schema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: true,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<{view: ArticleView}>) => {
      state.view = action.payload.view;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload.view);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
