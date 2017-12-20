// @flow

import React, { Component } from 'react';

import type { Trait } from 'types/trait';

type Props = {|
    traits: Array<Trait>,
    className?: string,
    styleName?: string
|};

export default class CharacterTraitsView extends Component<Props> {
    renderTrait(trait: Trait) {
        return (
            <div key={trait.key}>
                {trait.key}
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
