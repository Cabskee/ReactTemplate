const path = require('path');

const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
		new EnvironmentPlugin({
			NODE_ENV: 'development',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
			appMountId: 'app',
			// favicon: 'src/assets/favicon.png',
			hash: false,
			meta: {
				viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
			},
			minify: {
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
			},
			template: HtmlWebpackTemplate,
			title: 'CineBulb Wifi Manager',
		}),
	],
	devtool: 'inline-source-map',
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				include: path.resolve(__dirname, 'src/assets'),
				options: {
					outputPath: 'static',
				}
			},
		]
	},
	resolve: {
		symlinks: false,
		extensions: ['*', '.js', '.jsx', '.less'],
		alias: {
			assets: path.resolve(__dirname, 'src/assets'),
		}
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		port: 9000
	}
};
