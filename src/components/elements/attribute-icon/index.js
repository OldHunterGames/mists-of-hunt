// @flow

import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';

import normalizeAttribute from 'game/character/attributes/normalize-value';

import styles from './styles.less'; // eslint-disable-line no-unused-vars

type Props = {|
    value: number
|}

export default class AttributeIcon extends React.Component<Props> {
    render() {
        return (
            <Icon
                styleName={cx('icon', `value-${normalizeAttribute(this.props.value)}`)}
                name="circle"
            />
        );
    }
}
