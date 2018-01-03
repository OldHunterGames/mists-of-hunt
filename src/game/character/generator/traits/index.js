// @flow

import { RACE } from 'trait/race';
import { GENDER } from 'trait/gender';
import { ETHIC } from 'trait/alignment/ethic';
import { MORAL } from 'trait/alignment/moral';

import type { Trait } from 'types/trait';

export default (): Array<Trait> => {
    const traits = [];

    traits.push(RACE.getRandom());
    traits.push(GENDER.getRandom(traits));
    traits.push(ETHIC.getRandom());
    traits.push(MORAL.getRandom());

    return traits;
};
