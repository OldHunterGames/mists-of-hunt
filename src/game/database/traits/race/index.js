// @flow

export default (prefix: string) => ({
    human: {
        key: `${prefix}.human`
    },
    fay: {
        key: `${prefix}.fay`,
        modifiers: {
            might: -1,
            charm: 1
        }
    },
    fury: {
        key: `${prefix}.fury`,
        modifiers: {
            might: 1,
            mind: -1
        }
    },
    ghoul: {
        key: `${prefix}.ghoul`,
        modifiers: {
            might: 1,
            cunning: 1,
            charm: -2
        }
    }
});
