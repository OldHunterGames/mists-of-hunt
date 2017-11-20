// @flow

import 'semantic-ui-less/definitions/globals/reset.less';
import 'semantic-ui-less/definitions/globals/site.less';

import React from 'react';
import { Provider } from 'react-redux';

import Router from 'router';
import Routes from 'router/routes';

import store from 'store/configure-store';

export default () => (
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>
);
