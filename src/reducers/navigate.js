import React from 'react';
import { PAGE_CHANGED } from '../actions/NavBarActions';
import CollectionContainer from '../containers/CollectionContainer';


const initialState = {
    activePage: CollectionContainer,
};

export function navigateReducer(state=initialState, action) {
    switch (action.type) {
        case PAGE_CHANGED:
            return Object.assign({}, {activePage: action.payload});
        default:
            return state;
    }
};
