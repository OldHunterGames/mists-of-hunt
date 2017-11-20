// @flow

import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import type { Character } from 'types/character';

import Attributes from './attributes';

type Props = {
    character: Character
};

export default class CharacterCard extends Component<Props> {
    renderName() {
        const { name } = this.props.character;

        return [
            name.first,
            name.middle,
            name.last
        ].reduce(
            (fullName: string, part: string) => `${fullName} ${part}`.trim(),
            ''
        );
    }

    render() {
        const { character } = this.props;

        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.renderName()}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Attributes
                        attributes={character.attributes}
                    />
                </Card.Content>
            </Card>
        );
    }
}
