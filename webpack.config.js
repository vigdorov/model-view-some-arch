const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        filename: '[chunkhash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new CssMinimizerPlugin()],
    },
    devServer: {
        static: './dist',
        open: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/App.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
