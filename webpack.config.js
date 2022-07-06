const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { template } = require('webpack');

module.exports ={
    output : {
        filename : 'app.bundle.js'
    },
    plugins : [new HtmlWebpackPlugin(
        {template : './src/index.html'}
    )],
    module: {
        rules:[
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' /*configuracion cuando se configura babel desde su archivo*/

                /*Opcion de configuracion desde webpack*/
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: [
                //             '@babel/preset-env',
                //             '@babel/preset-react'
                //         ]
                //     }
                // }
            }
        ]
    }
}