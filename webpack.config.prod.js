const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'assets/scripts/',
	},
	devtool: 'cheap-source-map',
	plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
