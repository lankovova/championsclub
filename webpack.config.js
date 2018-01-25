const path = require('path');

const config = {
    devtool: 'source-map',
    entry: ['babel-polyfill', './resources/assets/js/divslot/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'game.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        allowedHosts: ['.slot.com'],
        contentBase: path.join(__dirname, ''),
        publicPath: "/public/js/",
        compress: true,
        port: 9000,
        proxy: {
            "/": "http://slot.com"
        }
    }
};

module.exports = config;
