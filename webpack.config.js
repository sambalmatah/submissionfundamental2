const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [

            /* style-loader dan css-loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },

            /* babel-loader */
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
};