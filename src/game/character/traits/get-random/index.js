// @flow

import RACE from '@game/db/trait/race';
import GENDER from '@game/db/trait/gender';
import ALIGNMENT_ETHIC from '@game/db/trait/alignment/ethic';
import ALIGNMENT_MORAL from '@game/db/trait/alignment/moral';
import CLASS from '@game/db/trait/class';

import type { RandomTraitLayer } from './process-layer';

import processLayer from './process-layer';

const layers: RandomTraitLayer[] = [
    {
        required: 'all',
        groups: [RACE]
    },
    {
        required: 'all',
        groups: [GENDER]
    },
    {
        required: 'all',
        groups: [
            ALIGNMENT_ETHIC,
            ALIGNMENT_MORAL
        ]
    },
    {
        required: 'all',
        groups: [CLASS]
    }
];

export default (): string[] => layers.reduce(processLayer, []);
