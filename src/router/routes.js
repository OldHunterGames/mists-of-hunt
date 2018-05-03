// @flow

import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from 'pages/main';
import CharacterEditor from 'pages/character-editor';

export default () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/character-editor" component={CharacterEditor} />
    </Switch>
);
