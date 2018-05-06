const webpackRendererConfig = require('electron-webpack/webpack.renderer.config.js');
const { inspect } = require('util');

webpackRendererConfig().then(config => {
    console.log(inspect(config, {
        showHidden: false,
        depth: null,
        colors: true
    }));
});
