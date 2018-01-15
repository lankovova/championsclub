const path = require('path');

/*global __dirname:true*/
const config = {
	devtool: 'source-map',
	entry: ['babel-polyfill', './resources/assets/divslot/js/index.js'],
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
		contentBase: path.join(__dirname, './public'),
		compress: true,
		port: 8087
	}
};

module.exports = config;
