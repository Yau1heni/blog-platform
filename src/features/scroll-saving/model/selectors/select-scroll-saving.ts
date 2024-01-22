import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';

export const selectScrollSaving = (state: StateSchema) => state.scrollSaving.scroll;

export const selectScrollByPath = createSelector(
  selectScrollSaving,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
