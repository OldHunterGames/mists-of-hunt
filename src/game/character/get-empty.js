// @flow

import type { Character } from './index';

import getEmptyName from './name/get-empty';

export default (): Character => ({
    name: getEmptyName()
});
