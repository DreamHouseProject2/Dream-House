export const REQUEST = 'REQUEST';
export const requestAction = request => {
    return {
        type: 'REQUEST',
        payload: request
    };
};
export const ADD_SELLREQUEST = 'ADD_SELLREQUEST';
export const addrequestAction = requests => {
    return {
        type: 'ADD_SELLREQUEST',
        list: requests
    };
};
