import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import getBaseConfig from './base-config';

export default {
    ...getBaseConfig(false),
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: true,
            __LIVE__: false,
        }),
        new CopyPlugin([{
            from: 'src/chrome/',
            to: './',
            context: './'
        }])
    ]
};
