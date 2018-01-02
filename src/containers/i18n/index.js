// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import type { State as I18nState } from 'reducers/i18n';

type Props = {
    i18n: I18nState,
    children: React.Node
};

class I18nContainer extends React.Component<Props> {
    render() {
        const { props } = this;
        const { i18n } = props;

        return (
            <IntlProvider
                locale={i18n.locale}
                messages={i18n.messages}
            >
                {props.children}
            </IntlProvider>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n
});

export default connect(mapStateToProps)(I18nContainer);
