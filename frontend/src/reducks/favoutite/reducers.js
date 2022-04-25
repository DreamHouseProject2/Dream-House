import * as Actions from './action';
import initialState from '../store/initialState';

export const FavouritesReducer = (state = initialState.favourites, action) => {
    switch (action.type) {
        case Actions.FETCH_FAVOURITE:
            console.log('action', action);
            return {
                ...state,
                list: action.list
            };

        case Actions.ADD_FAVOURITE:
            return {
                ...state,
                list: action.list
            };

        case Actions.DELETE_FAVOURITE:
            return {
                ...state,
                list: state.list.filter(fav => fav.id !== action.id)
            };

        default:
            return state;
    }
};
