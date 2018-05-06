// @flow

export type NormalizedValue = 0 | 1 | 2 | 3 | 4 | 5;

export default (value: number): NormalizedValue => {
    value = Math.floor(value);

    if (value <= 0) return 0;
    if (value >= 5) return 5;

    // $FlowFixMe number literal
    return value;
};
