// @flow

import * as React from 'react';
import { Card } from 'semantic-ui-react';

import NameLabel from 'labels/name';

import type { Character } from '@game/character';

import Traits from './traits';

type Props = {
    character: Character
};

export default (props: Props) => {
    const { character } = props;

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <NameLabel name={character.name} />
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Card.Header size="small">Traits</Card.Header>
                <Traits
                    traits={character.traits}
                />
            </Card.Content>
        </Card>
    );
};
