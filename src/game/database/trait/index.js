// @flow

import ALIGNMENT from './alignment';
import GENDER from './gender';
import RACE from './race';

export default (next) => {
    next({
        ALIGNMENT,
        GENDER,
        RACE
    });
};
