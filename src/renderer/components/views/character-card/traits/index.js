// @flow

import * as React from 'react';

import './styles.less';

type Props = {|
    traits: Array<string>,
    className?: string,
    styleName?: string
|};

export default class CharacterTraitsView extends React.Component<Props> {
    renderTrait(traitKey: string) {
        return (
            <div
                key={traitKey}
                styleName="trait"
            >
                {traitKey}
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
