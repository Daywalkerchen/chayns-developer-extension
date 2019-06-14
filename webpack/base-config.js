import path from 'path';

const ROOT_PATH = path.resolve('./');

export default (dev = false) => ({
    node: {
        __filename: true
    },
    entry: {
        plugin: [
            path.resolve('src/index')
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: !dev
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
});
