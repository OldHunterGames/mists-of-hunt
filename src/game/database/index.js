// @flow

import Register from 'utils/register';

import TRAIT from './trait';

const db = new Register();

db.registerTree({
    TRAIT
});

export default db;
