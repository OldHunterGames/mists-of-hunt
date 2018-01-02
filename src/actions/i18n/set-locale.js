// @flow

import axios from 'axios';
import { addLocaleData } from 'react-intl';

import * as types from 'constants/actions/i18n';
import { IMPORT_LOCALES } from 'constants/i18n';

import type { Locale } from 'types/i18n';

export default (locale: Locale) => async (dispatch) => {
    const [response, localeData] = await Promise.all([
        axios.get(`/lang/${locale}.json`),
        IMPORT_LOCALES[locale]()
    ]);

    addLocaleData(localeData);

    dispatch({
        type: types.SET_LOCALE,
        payload: {
            locale,
            messages: response.data
        }
    });
};
