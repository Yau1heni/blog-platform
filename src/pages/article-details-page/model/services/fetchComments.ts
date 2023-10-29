import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigType } from 'app/providers/store-provider';
import { CommentType } from 'entities/сomment';

export const fetchComments = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfigType<string>
    >(
      'articleDetails/fetchComments',
      async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
          return rejectWithValue('error');
        }

        try {
          const response = await extra.api.get<CommentType[]>('/comments', {
            params: {
              articleId,
              _expand: 'user',
            },
          });

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
