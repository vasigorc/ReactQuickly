const webpack = require('webpack')

module.exports = {
    // defines the file to start bundling (entry-point)
    entry: [
        'webpack-dev-server/client/?http://localhost:8080/email-webpack',
        './email-webpack/jsx/app.jsx'
    ],
    output: {
        publicPath: '/email-webpack/js/',
        path: __dirname + '/email-webpack/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        rules: [
            /**
             * Specifies the loader to import, and then inject CSS
             * into the web page from JavaScript
             */
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader/webpack', 'babel-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}