import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    heroes: [],
    hero: {},
};

const heroReducer = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroList(state, action) {
            state.heroes = action.payload;
        },
        heroItem(state, action) {
            state.hero = action.payload;
        },
    },
});

export const { heroList, heroItem } = heroReducer.actions;
export default heroReducer.reducer;
