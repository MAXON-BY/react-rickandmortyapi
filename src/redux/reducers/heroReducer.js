import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    heroes: [],
    hero: {},
    page: 1,
};

const heroReducer = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroList(state, action) {
            state.heroes = [...state.heroes, ...action.payload];
        },
        heroPage(state, action) {
            state.page = action.payload;
        },
        heroItem(state, action) {
            state.hero = action.payload;
        },
    },
});

export const { heroList, heroItem, heroPage } = heroReducer.actions;
export default heroReducer.reducer;
