var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

//常用路径
var RooT_PATH = path.join(__dirname);
var APP_PATH = path.join(RooT_PATH,'app');
var BUILD_PATH = path.join(RooT_PATH,'build');

module.exports = {
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/app.jsx')],
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx','.sass','css']
    },
    devServer:{
		historyApiFallback: true,
		inline: true,
		contentBase: './build/',
		port: '8086'
	},
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loaders:['babel-loader'],
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            }
        ]
    }
    
    
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:'webpack-react-env'
    //     })
    // ]
}