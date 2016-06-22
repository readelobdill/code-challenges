import { ACTIVATE, SET_FILTER } from '../actionTypes';

export function activate(item) {
    return {
        type: ACTIVATE,
        data: item
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        data: filter
    };
}

