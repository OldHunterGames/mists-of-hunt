// @flow

import type { Name } from '@game/character/name';

type Props = {|
    name: Name
|};

export default ({ name }: Props) => [
    name.first,
    name.middle,
    name.last
].filter(Boolean).join(' ');
