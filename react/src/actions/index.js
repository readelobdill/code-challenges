import { ACTIVATE, SET_FILTER, POPULATE_FILTER, POPULATE_ITEMS, REQUEST_ITEMS, REQUEST_FILTERS } from '../actionTypes';

export function activate(item) {
    return {
        type: ACTIVATE,
        data: item
    };
}

export function fetchItems(filter){
	return dispatch => {
		dispatch(requestItems(filter));
		return fetch(`http://www.kiddom.co/content.json?source=${filter}`)
			.then(response => response.json())
			.then(json => {dispatch(populateItems(json))});
    }
}

function requestItems(filter){
	dispatch => dispatch(setFilter(filter));
	return {
		type: REQUEST_ITEMS
	}
}

function populateItems(response) {
	return {
		type: POPULATE_ITEMS,
		items: response.results
	}
}

export function fetchFilters() {
  return dispatch => {
    dispatch(requestFilters())
    return fetch('http://www.kiddom.co/content/types.json')
      .then((response) => response.json())
      .then(json => dispatch(populateFilters(json)));
  }
}

function requestFilters(){
	return {
		type: REQUEST_FILTERS
	}
}

function populateFilters(filters){
	return {
		type: POPULATE_FILTER,
		filters: filters
	}
}

function setFilter(filter) {
	return {
		type: SET_FILTER,
		data: filter
	}
}
