import API from '../../API';
import { requestAction } from './action';
import { push } from 'connected-react-router';

const api = new API();

export const sellrequest = params => {
    return async dispatch => {
        return api
            .sellrequest(params)
            .then(sellrequest => {
                dispatch(requestAction(sellrequest));
                dispatch(push('/thankyou'));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};
