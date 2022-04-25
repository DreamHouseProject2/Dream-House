export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const addFavouriteAction = favourites => {
    return {
        type: 'ADD_FAVOURITE',
        list: favourites
    };
};

export const FETCH_FAVOURITE = 'FETCH_FAVOURITE';
export const fetchFavouriteAction = favourites => {
    return {
        type: 'FETCH_FAVOURITE',
        list: favourites
    };
};

export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
export const deleteFavouriteAction = id => {
    return {
        type: 'DELETE_FAVOURITE',
        id
    };
};

export const ERRORS_FAVOURITE = 'ERRORS_FAVOURITE';
export const errorFavouriteAction = errors => {
    return {
        type: ERRORS_FAVOURITE,
        payload: { errors }
    };
};
