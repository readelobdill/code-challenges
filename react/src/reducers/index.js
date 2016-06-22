import { ACTIVATE, SET_FILTER } from '../actionTypes';

const INITIAL = [
    {id: 1, title: "Foo", source: "home"},
    {id: 2, title: "Foo 2", source: "away"},
    {id: 3, title: "Foo 3", source: "home"}
];

export function items(state = INITIAL, action) {
    switch (action.type) {
        case ACTIVATE:
            let item = action.data;
            return state.map(i => {
                i.active = (i.id == item.id);
                return i;
            });
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
