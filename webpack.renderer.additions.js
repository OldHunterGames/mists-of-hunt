const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@game': path.resolve(__dirname, 'src/game')
        },
        modules: [
            path.resolve(__dirname, 'src/renderer'),
            'node_modules'
        ]
    }
};
