const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        //静态资源文件放入"./dist/static"
        assetModuleFilename: "static"
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    optimization: {
        runtimeChunk: 'single',
        // 分割 chunk 文件
        splitChunks: {
            cacheGroups: {
                commons: {
                    // 匹配 node_modules 下面所有依赖
                    "test": /[\\/]node_modules[\\/]/,
                    // chunk 名称
                    "name": 'vendors',
                    // chunks 表明将选择哪些 chunk 进行优化。有效值为 all，async 和 initial。
                    // 设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
                    "chunks": 'all',
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // less-loader  Less 文件编译为 CSS 文件
            {
                test: /\.less$/i,
                loader: "less-loader",
            },
            // sass-loader
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,  //小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
                    },
                },
                generator: {
                    filename: 'images/[base]',
                },
            },
            {
                // 字体库
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[base]',
                },
            },
            {
                // 通用资源 自动选择 inline 模块类型、resource 模块类型
                test: /\.txt/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // 4kb
                    }
                }
            },
            {
                // ts-loader
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                // es6+ 转为es5
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
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
