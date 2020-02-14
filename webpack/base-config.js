import path from 'path';
import autoprefixer from 'autoprefixer';

const ROOT_PATH = path.resolve('./');

export default (dev = false) => ({
    node: {
        __filename: true,
    },
    entry: {
        plugin: [
            path.resolve('src/index'),
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|svg|mp3)$/i,
            use: [{
                loader: 'file-loader',
            }],
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            autoprefixer({ flexbox: 'no-2009' }),
                        ],
                    },
                },
                'sass-loader',
            ],
        }],
    },
});
