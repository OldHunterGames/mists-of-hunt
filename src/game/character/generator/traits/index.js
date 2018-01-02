// @flow

import { RACE } from 'trait/race';
import { GENDER } from 'trait/gender';

import type { Trait } from 'types/trait';

export default (): Array<Trait> => {
    const traits = [];

    traits.push(RACE.getRandom());
    traits.push(GENDER.getRandom(traits));

    return traits;
};
