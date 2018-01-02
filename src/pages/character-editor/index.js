// @flow

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Segment, Header } from 'semantic-ui-react';

import { MALE } from 'game/database/trait/gender';
import { GHOUL } from 'game/database/trait/race';

import Character from 'game/character';

import CharacterCard from 'views/character-card';

import i18n from './i18n';

type Props = {};

type State = {|
    character: Character
|};

class CharacterEditor extends Component<Props, State> {
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
        const { formatMessage } = this.props.intl;
        const { character } = this.state;

        return (
            <Segment>
                <Header>
                    {formatMessage(i18n.title)}
                </Header>
                <CharacterCard
                    character={character}
                />
            </Segment>
        );
    }
}

export default injectIntl(CharacterEditor);
