// @flow

export default (prefix: string) => ({
    male: {
        key: `${prefix}.male`,
        modifiers: {
            might: 1,
            charm: -1
        }
    },
    female: {
        key: `${prefix}.female`,
        modifiers: {
            might: -1,
            charm: 1
        }
    },
    futanari: {
        key: `${prefix}.futanari`,
        modifiers: {
            mind: -1,
            cunning: 1
        }
    }
});
