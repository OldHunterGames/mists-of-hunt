// @flow

import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';

import normalizeAttribute from 'helpers/character/attributes/normalize';

import styles from './styles.less'; // eslint-disable-line no-unused-vars

type Props = {|
    value: number
|}

export default class AttributeIcon extends Component<Props> {
    render() {
        return (
            <Icon
                styleName={cx('icon', `value-${normalizeAttribute(this.props.value)}`)}
                name="circle"
            />
        );
    }
}
