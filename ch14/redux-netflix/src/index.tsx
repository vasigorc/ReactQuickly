import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const root = document.getElementById('app');

if (root) {
    render(
        <Provider store={createStore(reducers)}>
            {routes}
        </Provider>,
        root
    );
}