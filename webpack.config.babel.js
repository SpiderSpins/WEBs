export default {
	entry: {app: './src/index.js'},
	output: {filename: 'WEBs.js'},
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};