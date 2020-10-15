import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

function NetflixRouter(): JSX.Element {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    );
}

export { NetflixRouter }