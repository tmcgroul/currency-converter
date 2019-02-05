import { combineReducers } from 'redux';

import { navigateReducer } from './navigate';

export const rootReducer = combineReducers({
    navigate: navigateReducer,
});
