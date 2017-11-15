// @flow

import React from 'react';
import { Route, Switch } from 'react-router';

import Main from 'pages/main';

export default () => (
    <Switch>
        <Route exact path="/" component={Main} />
    </Switch>
);
