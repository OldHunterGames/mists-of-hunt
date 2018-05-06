const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const postcssOptions = {
    plugins: () => [
        autoprefixer({
            browsers: [
                'last 3 version'
            ]
        })
    ]
};

module.exports = {
    resolve: {
        alias: {
            '@game': path.resolve(__dirname, 'src/game'),
            // https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf
            '../../theme.config': path.join(__dirname, 'config/styles/theme.config')
        },
        modules: [
            path.resolve(__dirname, 'src/renderer'),
            path.resolve(__dirname, 'src/renderer/components'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.es6', '.less', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                /*
                 * electron-webpack uses (webpack-merge).smart()
                 * this loader is needed to remove the original loader
                 */
                test: /\.less$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'node_modules/semantic-ui-less/')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: postcssOptions
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                globalVars: Object.assign(
                                    {},
                                    require('./config/styles/variables.js')
                                )
                            }
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]___[sha256:hash:base64:5]',
                                minimize: false,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: postcssOptions
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                globalVars: Object.assign(
                                    {},
                                    require('./config/styles/variables.js')
                                )
                            }
                        }
                    ]
                })
            }
        ]
    }
};
