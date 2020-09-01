import heroReducer, { heroItem, heroList, heroPage } from './heroReducer';
import React from 'react';

it('new heroes should be added', () => {
    let newItemHero = ['New Hero'];
    let action = heroList(newItemHero);
    let state = { heroes: [] };
    let newListHeroes = heroReducer(state, action);

    expect(newListHeroes.heroes[0]).toBe('New Hero');
});

it('change page of heroes', () => {
    let newPage = 2;
    let action = heroPage(newPage);
    let state = { page: 1 };
    let newPageHeroes = heroReducer(state, action);

    expect(newPageHeroes.page).toBe(2);
});

it('change page of heroes', () => {
    let newHero = 'Hero name';
    let action = heroItem(newHero);
    let state = { hero: {} };
    let newItemHero = heroReducer(state, action);

    expect(newItemHero.hero).toBe('Hero name');
});
