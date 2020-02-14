import webpack from 'webpack';

import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import getBaseConfig from './base-config';

export default {
    ...getBaseConfig(false),
    devtool: 'hidden-source-map',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({
            sourceMap: true,
            parallel: true,
        })],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: true,
            __LIVE__: false,
        }),
        new CopyPlugin([{
            from: 'src/chrome/',
            to: './',
            context: './',
        }]),
    ],
};
