import { createSelector } from 'reselect';

const homesSelector = state => state.homes;

export const getHomes = createSelector([homesSelector], state => state.list);
