import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAuthData } from 'entities/user';
import i18n from 'i18next';
import { ThunkConfigType } from 'app/providers/store-provider';
import { CommentType } from 'entities/сomment';
import { selectArticleDetailsData } from 'entities/article';
import { fetchComments } from '../services/fetch-comments';

export const addCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfigType<string>>(
  'add-comment-for-article',
  async (text, {
    extra, rejectWithValue, getState, dispatch,
  }) => {
    const userData = selectAuthData(getState());
    const article = selectArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue(i18n.t('нет данных'));
    }
    try {
      const res = await extra.api.post<CommentType>('/comments', {
        articleId: article.id, userId: userData.id, text,
      });

      dispatch(fetchComments(article.id));

      return res.data;
    } catch (e) {
      return rejectWithValue(i18n.t('ошибка'));
    }
  },
);
