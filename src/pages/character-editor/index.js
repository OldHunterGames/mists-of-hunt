// @flow

import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

import { MALE } from 'game/database/trait/gender';
import { GHOUL } from 'game/database/trait/race';

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
                MALE,
                GHOUL
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
