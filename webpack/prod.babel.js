import webpack from 'webpack';
import merge from 'webpack-merge';

import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import common from "./common";

export default merge(
    common, {
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
    }
);
