// @flow

import * as React from 'react';

import { getRandom as getRandomCharacter } from '@game/character';

import type { Character } from '@game/character';

type Props = {};

type State = {
    character: Character
};

export default class App extends React.Component<Props, State> {
    state = {
        character: getRandomCharacter()
    }

    render() {
        const { character } = this.state;

        return (
            <div>
                <h1>Mists of Hunt</h1>
                <h2>Character</h2>
                <ul>
                    <li>Name: {character.name.first}</li>
                </ul>
            </div>
        );
    }
}
