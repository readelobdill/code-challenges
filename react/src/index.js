import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './reducers';
import { fetchFilters } from './actions';
import { App } from './components';
import { FavoriteItemList, AvailableFilters } from './containers';

import './index.scss';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunkMiddleware)
);

//TODO: Would love to do this in componentDidMount() somewhere but do
//		not know how to ask correct question with current syntax structure
store.dispatch(fetchFilters());

ReactDOM.render(
    <Provider store={store}>
        <App >
            <AvailableFilters />
            <FavoriteItemList />
        </App>
    </Provider>,
    document.getElementById('root')
);
