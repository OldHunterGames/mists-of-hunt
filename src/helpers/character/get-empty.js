// @flow

import getEmptyName from 'helpers/name/get-empty';

import { FEMALE } from 'constants/gender';

import type { Character } from 'types/character';

import getEmptyAttributes from './attributes/get-empty';

export default (): Character => ({
    name: getEmptyName(),
    gender: FEMALE,
    attributes: getEmptyAttributes()
});
