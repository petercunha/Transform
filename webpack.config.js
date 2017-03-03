var webpack = require('webpack');

process.noDeprecation = true;
module.exports = {
    context: __dirname,
    devtool: false,
    entry: "./source/index.js",
    output: {
        path: __dirname + "/docs/game/javascripts",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            sourcemap: false
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ]
    },
};
