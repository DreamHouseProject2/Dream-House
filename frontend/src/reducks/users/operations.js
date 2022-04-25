import API, { LOGIN_USER_KEY } from '../../API';
import { signUpAction, signInAction, signOutAction } from './action';
import { push } from 'connected-react-router';

const api = new API();

export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON = localStorage.getItem(LOGIN_USER_KEY);
        if (userJSON && userJSON.token !== '') {
            dispatch(signInAction(JSON.parse(userJSON)));
        }
    };
};

export const signUp = (user_name, email, password) => {
    return async dispatch => {
        // Validation
        if (user_name === '' || email === '' || password === '') {
            alert('Please fill out name, email, and password.');
            return false;
        }

        return api
            .signUp(user_name, email, password)
            .then(user => {
                dispatch(signUpAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                dispatch(push('/'));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};
// values = {email:'', password: ''}
export const signIn = ({ email, password }, onSuccess) => {
    return async dispatch => {
        // Validation
        if (email === '' || password === '') {
            alert('Please fill out email and password.');
            return false;
        }

        return api
            .signIn(email, password)
            .then(user => {
                dispatch(signInAction(user));
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
                console.log(localStorage.getItem(LOGIN_USER_KEY));
                onSuccess();
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};

export const signOut = () => {
    return async dispatch => {
        dispatch(signOutAction());
        localStorage.removeItem(LOGIN_USER_KEY);
        dispatch(push('/signin'));
    };
};
