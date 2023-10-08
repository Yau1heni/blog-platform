import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState:UserSchema = {
  authDada: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.authDada = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
