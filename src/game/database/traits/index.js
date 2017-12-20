// @flow

import getGenders from './gender';
import getRaces from './race';

export default () => ({
    gender: getGenders('gender'),
    race: getRaces('race')
});
