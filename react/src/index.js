import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import { App } from './components';
import { FavoriteItemList, AvailableFilters } from './containers';

import './index.scss';

const store = createStore(
    combineReducers(reducers)
);

ReactDOM.render(
    <Provider store={store}>
        <App >
            <AvailableFilters />
            <FavoriteItemList />
        </App>
    </Provider>,
    document.getElementById('root')
);
