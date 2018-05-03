// @flow

import 'semantic-ui-less/definitions/globals/reset.less';
import 'semantic-ui-less/definitions/globals/site.less';

import 'babel-polyfill';

import * as React from 'react';
import { Provider } from 'react-redux';

import I18nContainer from 'containers/i18n';

import Router from 'router';
import Routes from 'router/routes';

import store from 'store/configure-store';

export default () => (
    <Provider store={store}>
        <I18nContainer>
            <Router>
                <Routes />
            </Router>
        </I18nContainer>
    </Provider>
);
