const path = require('path');
const urlRegex = require('url-regex');

const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');

const outputFolders = {
    js: 'js/',
    css: 'css/',
    img: 'img/',
    fonts: 'fonts/'
};

const host = 'localhost';
const port = 8777;

const appIndex = './src/index';
const entry = [
    appIndex
];

const plugins = [
    new MiniCssExtractPlugin({
        filename: `${outputFolders.css}[name].[chunkhash].css`,
        chunkFilename: `${outputFolders.css}[id].[chunkhash].css`
    }),
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
        path: buildPath,
        filename: 'index.html'
    }),
    new WriteFilePlugin()
];

const postcssOptions = {
    plugins: () => [
        autoprefixer({
            browsers: [
                'last 3 version'
            ]
        })
    ]
};

// Common rules
const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader'
        ]
    },
    {
        test: /\.(less|css)$/,
        include: [
            path.resolve(__dirname, 'node_modules/semantic-ui-less/')
        ],
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    minimize: false,
                    importLoaders: 2
                }
            },
            {
                loader: 'postcss-loader',
                options: postcssOptions
            },
            {
                loader: 'semantic-ui-less-module-loader',
                options: {
                    themeConfigPath: path.resolve(__dirname, './config/styles/theme.config'),
                    siteFolder: path.resolve(__dirname, './config/styles/site'),
                    globalVars: Object.assign(
                        {},
                        require('./config/styles/variables.js')
                    )
                }
            }
        ]
    },
    {
        test: /\.less$/,
        exclude: [
            path.resolve(__dirname, 'node_modules')
        ],
        use: [
            MiniCssExtractPlugin.loader,
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
    },
    {
        test: /\.svg$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader',
            {
                loader: 'react-svg-loader',
                query: {
                    svgo: {
                        plugins: [{ removeTitle: false }],
                        floatPrecision: 2
                    }
                }
            }
        ]
    },
    {
        test: /\.(woff|woff2|ttf|eot|svg)/,
        exclude: [
            path.resolve(__dirname, 'src')
        ],
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: `${outputFolders.fonts}[name].[sha256:hash:base64:6].[ext]`
                }
            }
        ]
    },
    {
        test: /\.(png|jpg|gif)/,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: `${outputFolders.img}[name].[sha256:hash:base64:6].[ext]`
                }
            }
        ]
    },
    {
        test: urlRegex({ exact: true }),
        use: [
            'url-loader'
        ]
    }
];

const publicPath = '/';
const config = {
    entry,
    output: {
        path: buildPath,
        publicPath,
        filename: `${outputFolders.js}[name].[chunkhash].js`
    },
    module: {
        rules
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src/components'),
            path.resolve(__dirname, 'src/game/database')
        ],
        extensions: ['.js', '.jsx', '.es6', '.less', '.json']
    },
    plugins,
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    },
    devServer: {
        publicPath,
        contentBase: buildPath,
        historyApiFallback: true,
        inline: false,
        hot: false,
        disableHostCheck: true,
        host,
        port,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m'
            }
        }
    }
};

module.exports = config;
