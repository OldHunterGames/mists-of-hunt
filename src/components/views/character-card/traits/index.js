// @flow

import * as React from 'react';

import database from 'game/database';

import type { Trait } from 'types/trait';

type Props = {|
    traits: Array<Trait>,
    className?: string,
    styleName?: string
|};

export default class CharacterTraitsView extends React.Component<Props> {
    renderTrait(trait: Trait) {
        const key = database.getIndex(trait);

        return (
            <div key={key}>
                {key}
            </div>
        );
    }

    render() {
        const { props } = this;

        return (
            <div className={props.className}>
                {props.traits.map(this.renderTrait)}
            </div>
        );
    }
}
