// @flow

import React, { Component } from 'react';

import getEmptyCharacter from 'helpers/character/get-empty';

type Props = {};

export default class MainPage extends Component<Props> {
    constructor() {
        super();

        console.log('Empty character', getEmptyCharacter()); // eslint-disable-line
    }
    render() {
        return (
            <div>Mists of Hunt</div>
        );
    }
}
