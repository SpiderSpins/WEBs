import webpack from 'webpack';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
	entry: {
		WEBs: './src/index.js'
	},
	output: {
		path:'./dist',
		filename: optimizeMinimize ? 'WEBs.min.js' : 'WEBs.js',
		library: 'WEBs',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.scss$/, loader: 'style!css!sass'},
			{test: /\.(png|gif)$/, loader: 'url-loader?limit=10000'}
		]
	},
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			},
			d3: {
				root: 'd3',
				commonjs2: 'd3',
				commonjs: 'd3',
				amd: 'd3'
			}
		}
	],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
		})
	],
	devtool: optimizeMinimize ? 'source-map' : null
};