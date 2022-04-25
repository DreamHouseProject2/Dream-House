import API from '../../API';
import { fetchHomesAction, clearHomesAction } from './actions';

const api = new API();

export const clearHomes = () => {
    return async dispatch => {
        dispatch(clearHomesAction());
    };
};

export const fetchHomes = (find, tagId) => {
    return async dispatch => {
        return api
            .getHomes(find, tagId)
            .then(homes => {
                // const prevHomes = getState().homes.list;
                // const nextHomes = [...prevHomes, ...homes['results']];
                // let hasNext = false;
                // if (homes['next']) {
                //     hasNext = true;
                // }
                dispatch(fetchHomesAction(homes));
            })
            .catch(error => {
                alert('Failed to connect API: /homes/');
            });
    };
};
