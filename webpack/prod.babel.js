import webpack from 'webpack';

import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import getBaseConfig from './base-config';

export default {
    ...getBaseConfig(false),
    devtool: 'none',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({
            sourceMap: false,
            parallel: true,
        })],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            __STAGING__: false,
            __LIVE__: true,
        }),
        new CopyPlugin([{
            from: 'src/chrome/',
            to: './',
            context: './',
        }]),
    ],
};
