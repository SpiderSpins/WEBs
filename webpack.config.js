module.exports = {
	entry: './index.js',
	output: 'WEBs.js',
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};