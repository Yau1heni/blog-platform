import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSavingSchema } from '../types/scroll-saving-schema';

const initialState: ScrollSavingSchema = {
  scroll: {},
};

export const scrollSavingSlice = createSlice({
  name: 'scrollSaving',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSavingActions, reducer: scrollSavingReducer } = scrollSavingSlice;
