// @flow

import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

import getEmptyCharacter from 'helpers/character/get-empty';

import CharacterCard from 'views/character-card';

import type { Character } from 'types/character';

type Props = {};

type State = {|
    character: Character
|};

export default class CharacterEditor extends Component<Props, State> {
    constructor() {
        super();

        const defaultCharacter = getEmptyCharacter();

        this.state = {
            character: {
                ...defaultCharacter,
                name: {
                    ...defaultCharacter.name,
                    first: 'Джек'
                }
            }
        };
    }

    render() {
        return (
            <Segment>
                <Header>
                    Редактор персонажа
                </Header>
                <CharacterCard
                    character={this.state.character}
                />
            </Segment>
        );
    }
}
