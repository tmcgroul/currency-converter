import { combineReducers } from 'redux';

import { navigateReducer } from './navigate';
import { collectionReducer } from './collection';

export const rootReducer = combineReducers({
    navigate: navigateReducer,
    collection: collectionReducer,
});
