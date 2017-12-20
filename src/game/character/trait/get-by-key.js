// @flow

import { get } from 'lodash';

import database from 'game/database';

import { Trait } from 'types/trait';

export default (key: string): Trait | void => {
    const trait = get(database.traits, key);

    return trait;
};
