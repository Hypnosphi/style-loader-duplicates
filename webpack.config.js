const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
};
