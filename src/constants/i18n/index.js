// @flow

export const EN = 'en';
export const RU = 'ru';

export const IMPORT_LOCALES = {
    [EN]: () => new Promise((resolve) => {
        require.ensure(['react-intl/locale-data/en'], (require) => {
            resolve(require('react-intl/locale-data/en'));
        });
    }),
    [RU]: () => new Promise((resolve) => {
        require.ensure(['react-intl/locale-data/ru'], (require) => {
            resolve(require('react-intl/locale-data/ru'));
        });
    })
};

export const LOCALES = {
    [EN]: {
        label: 'English'
    },
    [RU]: {
        label: 'Русский'
    }
};
