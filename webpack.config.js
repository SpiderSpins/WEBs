module.exports = {
	entry: {app: './index.js'},
	output: {filename: 'WEBs.js'},
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