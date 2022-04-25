import { createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { HomesReducer } from '../homes/reducers';
import { FavouritesReducer } from '../favoutite/reducers';
import { TagsReducer } from '../tags/reducers';
import { UserReducer } from '../users/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            homes: HomesReducer,
            favourites: FavouritesReducer,
            tags: TagsReducer,
            user: UserReducer
        }),
        compose(
            applyMiddleware(routerMiddleware(history), thunk)
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
