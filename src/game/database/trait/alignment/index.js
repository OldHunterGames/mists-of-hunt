// @flow

import ETHIC from './ethic';
import MORAL from './moral';

export default (next) => {
    next({
        ETHIC,
        MORAL
    });
};
