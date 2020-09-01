import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heroes: {},
  hero: {},
  currentPage: null,
};

const heroReducer = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroList(state, { payload }) {
      state.heroes[state.currentPage] = payload;
    },
    heroItem(state, { payload }) {
      state.hero[payload.id] = payload.result;
    },
    setPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { heroList, setPage, heroItem } = heroReducer.actions;
export default heroReducer.reducer;
