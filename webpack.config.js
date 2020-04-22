const path = require('path');

module.exports = {
	mode: 'development',
	entry: './app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'assets/scripts/',
	},
	devtool: 'inline-source-map',
	// devServer: {
	// 	contentBase: './',
	// },
};
