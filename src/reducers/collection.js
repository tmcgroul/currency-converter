import { CURRENCY_REQUEST, CURRENCY_SUCCESS, CHANGE_FAVOURITE_STATE } from '../actions/CollectionActions';

const initialState = {
    currencies: [],
    isFetching: false,
}

export function collectionReducer(state=initialState, action) {
    switch (action.type) {
        case CURRENCY_REQUEST:
            return Object.assign({}, {currencies: state.currencies, isFetching: true});
        case CURRENCY_SUCCESS:
            return Object.assign({}, {currencies: action.payload, isFetching: false});
        case CHANGE_FAVOURITE_STATE:
            action.payload.isFavourite = !action.payload.isFavourite;
            return Object.assign({}, {currencies: state.currencies, isFetching: false});
        default:
            return state;
    }
}
