export const PAGE_CHANGED = 'PAGE_CHANGED';

export function switchPage(container) {
    return dispatch => {
        dispatch({
            type: PAGE_CHANGED,
            payload: container,
        });
    }
};
