const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.jsx',
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
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                    },
                                ],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
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
