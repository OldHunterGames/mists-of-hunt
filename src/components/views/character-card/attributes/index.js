// @flow

import * as React from 'react';

import AttributeIcon from 'elements/attribute-icon';

import * as ATTRIBUTE_LABEL from 'constants/dictionaries/attributes';

import type {
    CharacterAttributes,
    CharacterAttributeValue
} from 'types/character-attributes';

import styles from './styles.less'; // eslint-disable-line no-unused-vars

type Props = {|
    attributes: CharacterAttributes,
    className?: string,
    styleName?: string
|};

export default class CharacterAttributesView extends React.Component<Props> {
    renderAttribute(title: string, value: CharacterAttributeValue) {
        return (
            <div styleName="attribute">
                <AttributeIcon
                    value={value}
                />
                <span
                    styleName="title"
                >
                    {title}
                </span>
            </div>
        );
    }

    render() {
        const { attributes } = this.props;

        return (
            <div
                styleName="attributes"
                className={this.props.className}
            >
                {this.renderAttribute(ATTRIBUTE_LABEL.MIGHT, attributes.might)}
                {this.renderAttribute(ATTRIBUTE_LABEL.MIND, attributes.mind)}
                {this.renderAttribute(ATTRIBUTE_LABEL.CHARM, attributes.charm)}
                {this.renderAttribute(ATTRIBUTE_LABEL.CUNNING, attributes.cunning)}
            </div>
        );
    }
}
