import { ACTIVATE, SET_FILTER, POPULATE_FILTER, POPULATE_ITEMS, REQUEST_ITEMS, REQUEST_FILTERS } from '../actionTypes';

export function items(state = [], action) {
    switch (action.type) {
        case ACTIVATE:
            let item = action.data;
            return state.map(i => {
                i.active = (i.id == item.id);
                return i;
            });
        case REQUEST_ITEMS:
            return [];
        case POPULATE_ITEMS:
            return action.items;
        default:
            return state;
    }
}

export function filtersLoading(state = false, action){
    switch (action.type) {
        case REQUEST_FILTERS:
            return true;
        case POPULATE_FILTER:
            return false
        default:
            return state;
    }
}

export function itemsLoading(state = false, action){
   switch (action.type) {
        case REQUEST_ITEMS:
           return true;
        case POPULATE_ITEMS:
            return false
        default:
           return state;
   }
}

export function filters(state = [], action) {
    switch (action.type) {
        case POPULATE_FILTER:
            return Object.keys(action.filters);
        default:
            return state;
    }
}

export function activeFilter(state = null, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.data;
        default:
            return state;
    }
}
