// @flow

import * as types from 'constants/actions/i18n';

import type { Locale, Messages } from 'types/i18n';

export type State = {
    locale: Locale,
    messages?: Messages
};

const initialState: State = {
    locale: 'en'
};

export default (state: State = initialState, action) => {
    switch (action.type) {
        case types.SET_LOCALE:
            const { locale, messages } = action.payload;

            return {
                locale,
                messages
            };

        default:
            return state;
    }
};
