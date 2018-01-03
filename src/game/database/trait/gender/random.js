// @flow

import frequenciesRandom from 'utils/randomizers/frequencies';

import { FAY } from 'trait/race';

import type { Trait, TraitsMap } from 'types/trait';

const interestRaces = [FAY];

export default ({ MALE, FEMALE, FUTANARI }: TraitsMap) => {
    const fayGender = frequenciesRandom([
        [80, FEMALE],
        [15, FUTANARI],
        [5, MALE]
    ]);
    const defaultGender = frequenciesRandom([
        [45, MALE],
        [45, FEMALE],
        [10, FUTANARI]
    ]);

    return (traits: Array<Trait>) => {
        const race = traits.find((t) => {
            return interestRaces.some((r) => t === r);
        });

        if (race === FAY) {
            return fayGender();
        }

        return defaultGender();
    };
};
