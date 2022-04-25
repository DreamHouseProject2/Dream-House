import API from '../../API';
import { addFavouriteAction, fetchFavouriteAction, deleteFavouriteAction, errorFavouriteAction } from './action';

const api = new API();

export const fetchFavourites = () => {
    return async dispatch => {
        return api.getFavourites().then(favourites => {
            dispatch(fetchFavouriteAction(favourites));
        });
    };
};

export const addFavourites = addFavouriteBody => {
    return async dispatch => {
        return api
            .addFavourites(addFavouriteBody)
            .then(home => {
                // dispatch(addFavouriteAction(home));
            })
            .catch(errors => {
                dispatch(errorFavouriteAction(errors));
            });
    };
};

export const deleteFavourites = id => {
    return async dispatch => {
        return api
            .deleteFavourites(id)
            .then(favourites => {
                dispatch(deleteFavouriteAction(id));
            })
            .catch(errors => {
                dispatch(errorFavouriteAction(errors));
            });
    };
};
