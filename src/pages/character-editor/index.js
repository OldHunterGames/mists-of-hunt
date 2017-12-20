// @flow

import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

import Character from 'game/character';

import CharacterCard from 'views/character-card';

type Props = {};

type State = {|
    character: Character
|};

export default class CharacterEditor extends Component<Props, State> {
    constructor() {
        super();

        const character = new Character({
            name: {
                first: 'Джек',
                middle: '',
                last: ''
            },
            traits: [
                'gender.male',
                'race.ghoul'
            ]
        });

        this.state = {
            character
        };
    }

    render() {
        const { character } = this.state;

        return (
            <Segment>
                <Header>
                    Редактор персонажа
                </Header>
                <CharacterCard
                    character={character}
                />
            </Segment>
        );
    }
}
