const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    performance: {hints: false},
    entry: ['./index.js'],
    output: {
        filename: './scripts.min.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    "presets": [
                        ["@babel/preset-env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ]
                },
            }
        ]
    }
};
