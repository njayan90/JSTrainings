const HtmlWebpackPlugin = require('html-webpack-plugin') 
var path=require('path');
module.exports={
mode:'development',
entry: "./src/view.js",
output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
},
module:{
    rules:[
        
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
},
plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    hash: true
    })
] 
     

};