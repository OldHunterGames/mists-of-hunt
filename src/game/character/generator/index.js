// @flow

import Character from 'game/character';

import genTraits from './traits';

export default (): Character => new Character({
    name: {
        first: 'Random',
        middle: '',
        last: ''
    },
    traits: genTraits()
});
