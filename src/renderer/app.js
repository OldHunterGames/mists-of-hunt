// @flow

import 'semantic-ui-less/definitions/globals/reset.less';
import 'semantic-ui-less/definitions/globals/site.less';

import * as React from 'react';

import { getRandom as getRandomCharacter } from '@game/character';

import CharacterCard from 'views/character-card';

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
        return (
            <div>
                <h1>Mists of Hunt</h1>
                <button onClick={this.handleRandomize}>
                    Randomize character
                </button>
                <CharacterCard
                    character={this.state.character}
                />
            </div>
        );
    }
}
