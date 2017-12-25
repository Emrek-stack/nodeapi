const path = require('path');
var VENDOR_PATH = __dirname + '/node_modules';

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {

        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),

    },
    devServer: {
        inline: true,
        port: 8080
    },
    externals: {
        "jquery": "$",
        'react': 'React',
        'react-dom': 'ReactDOM',        
        'axios': 'axios'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
}

module.exports = config;