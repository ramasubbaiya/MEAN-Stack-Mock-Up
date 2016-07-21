var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080',
		'webpack/hot/only-dev-server',
		'bootstrap-loader',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		moduleDirectories: ['node_modules', 'src'],
		extension: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css',
					'postcss',
					'autoprefixer?browsers=last 3 versions',
					'sass?outputStyle=expanded'
				]
			},
			{
				test: /\.(woff2?|ttf|eot|svg)$/,
				loader: 'url?limit=10000'
			},
			{
				test: /bootstrap-sass\/assets\/javascripts\//,
				loader: 'imports?jQuery=jquery'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}

}