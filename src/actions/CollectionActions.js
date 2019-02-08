export const CURRENCY_REQUEST = 'CURRENCY_REQUEST';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const CHANGE_FAVOURITE_STATE = 'CHANGE_FAVOURITE_STATE';

export function getCurrency() {
    return async function (dispatch) {
        dispatch({
            type: CURRENCY_REQUEST
        });

        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const json = await response.json();
        let currencies = Object.values(json.Valute);
        const favourites = JSON.parse(localStorage.getItem('favourites'));

        if (favourites) {
            currencies.forEach(currency => {
                if (favourites.includes(currency.ID)) {
                    currency.isFavourite = true;
                    console.log('includes');
                }
            });
        }

        dispatch({
            type: CURRENCY_SUCCESS,
            payload: currencies,
        })
    }
}

export function manageFavourites(currency) {
    return function (dispatch) {
        dispatch({
            type: CHANGE_FAVOURITE_STATE,
            payload: currency
        });

        let favourites = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];

        if (currency.isFavourite) {
            favourites.push(currency.ID)
        } else {
            favourites = favourites.filter(item => item != currency.ID);
        }

        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
}
