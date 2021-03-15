const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],

    devtool: "source-map",
    devServer: {
        compress: true,
        port: 8080,
        open: true,
    }
};
