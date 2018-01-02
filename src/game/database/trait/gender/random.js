// @flow


import frequenciesRandom from 'utils/randomizers/frequencies';

import { FAY } from 'trait/race';
import { MALE, FEMALE, FUTANARI } from 'trait/gender';

import type { Trait } from 'types/trait';

const interestRaces = [FAY];

const fayGender = frequenciesRandom([
    [90, FEMALE],
    [15, FUTANARI],
    [5, MALE]
]);

const defaultGender = frequenciesRandom([
    [45, MALE],
    [45, FEMALE],
    [10, FUTANARI]
]);

export default (traits: Array<Trait>) => {
    const race = traits.find((t) => {
        return interestRaces.some((r) => t === r);
    });

    if (race === FAY) {
        return fayGender();
    }

    return defaultGender();
};
