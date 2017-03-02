var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: false,
    entry: "./source/index.js",
    output: {
        path: __dirname + "/docs/javascripts",
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
        loaders: [{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ]
    },
};
