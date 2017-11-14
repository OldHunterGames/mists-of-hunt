const webpack = require('webpack');
const path = require('path');
const urlRegex = require('url-regex');

const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');

const outputFolders = {
    js: 'js/',
    css: 'css/',
    img: 'img/',
    fonts: 'fonts/',
    media: 'media/'
};

const host = 'localhost';
const port = 8777;

const appIndex = './src/index';
const entry = {
    app: appIndex,
    vendor: [
        'babel-polyfill',
        'es6-promise',
        'react-dom',
        'react-redux',
        'react-router',
        'react',
        'redux-thunk',
        'redux',
        'recompose',
        'classnames'
    ]
};

const extractVendors = new ExtractTextPlugin({
    filename: 'vendor.css'
});

const extractLESS = new ExtractTextPlugin({
    filename: 'main.css',
    ignoreOrder: true
});

const plugins = [
    extractVendors,
    extractLESS,
    new webpack.NamedModulesPlugin(),
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

// Common loaders
const loaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
            'cache-loader',
            'babel-loader'
        ]
    },
    {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
            configFile: '.eslintrc',
            failOnError: false,
            fix: true
        }
    },
    {
        test: /\.(less|css)$/,
        include: [
            path.resolve(__dirname, 'node_modules')
        ],
        loader: extractVendors.extract({
            fallback: 'style-loader',
            use: [
                'cache-loader',
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
                'less-loader'
            ]
        })
    },
    {
        test: /\.less$/,
        exclude: [
            path.resolve(__dirname, 'node_modules')
        ],
        loader: extractLESS.extract({
            fallback: 'style-loader',
            use: [
                'cache-loader',
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
                'less-loader'
            ]
        })
    },
    {
        test: /\.svg$/,
        exclude: /node_modules/,
        loaders: [
            'cache-loader',
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
        test: /\.(mp4|webm|webp)/,
        exclude: /node_modules/,
        loaders: [
            'cache-loader',
            {
                loader: 'file-loader',
                options: {
                    name: `${outputFolders.fonts}[name].[sha256:hash:base64:6].[ext]`
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
            'cache-loader',
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
            'cache-loader',
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
            'cache-loader',
            'url-loader'
        ]
    }
];

const publicPath = '/';
const config = {
    devtool: 'source-map',
    entry,
    output: {
        path: buildPath,
        publicPath,
        filename: `${outputFolders.js}[name].js`
    },
    module: {
        loaders
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src/components')
        ],
        extensions: ['.js', '.jsx', '.es6', '.less', '.yml', '.json']
    },
    plugins,
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
