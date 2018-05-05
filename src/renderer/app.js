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

    handleRandomize = () => {
        this.setState({
            character: getRandomCharacter()
        });
    }

    render() {
        const { character } = this.state;

        return (
            <div>
                <h1>Mists of Hunt</h1>
                <h2>Character</h2>
                <button onClick={this.handleRandomize}>
                    Randomize
                </button>
                <div>Name: {character.name.first}</div>
                <h3>Traits</h3>
                {character.traits.map((traitKey) => (
                    <div key={traitKey}>{traitKey}</div>
                ))}
            </div>
        );
    }
}
