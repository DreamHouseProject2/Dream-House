export const FETCH_HOMES = 'FETCH_HOMES';
export const fetchHomesAction = homes => {
    return {
        type: FETCH_HOMES,
        list: homes
    };
};
export const CLEAR_HOMES = 'CLEAR_HOMES';
export const clearHomesAction = () => {
    return {
        type: CLEAR_HOMES,
        list: []
    };
};
