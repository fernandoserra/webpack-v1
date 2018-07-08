const patch = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: patch.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: patch.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: { //Configuracion de webpack-dev-server
        port: 9000,
        //contentBase: './dist', //para abrirlo en un directorio en especifico
        open: true
    },
    module:{
        rules:[             
            {               
                test: /\.css$/, 
                //use: ['style-loader','css-loader'],                
                use: ExtractTextPlugin.extract({                   
                    use:"css-loader"
                }),
            }
        ]
    },
    plugins:[     
        new ExtractTextPlugin("css/styles.css")
    ]
}
