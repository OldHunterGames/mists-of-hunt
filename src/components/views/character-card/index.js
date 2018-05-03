// @flow

import * as React from 'react';
import { Card } from 'semantic-ui-react';

import Character from 'game/character';

import Attributes from './attributes';
import Traits from './traits';

type Props = {
    character: Character
};

export default class CharacterCard extends React.Component<Props> {
    renderName() {
        const { name } = this.props.character.data;

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
                    <Card.Header size="small">Трейты</Card.Header>
                    <Traits
                        traits={character.getTraits()}
                    />
                </Card.Content>
                <Card.Content extra>
                    <Attributes
                        attributes={character.getAttributes()}
                    />
                </Card.Content>
            </Card>
        );
    }
}
