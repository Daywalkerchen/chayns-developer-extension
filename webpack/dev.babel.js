import webpack from 'webpack';

import fs from 'fs';
import path from 'path';

import getBaseConfig from './base-config';

export default {
    ...getBaseConfig(true),
    devServer: {
        cert: fs.readFileSync(path.join('//fs1/', 'ssl', 'tobitag.crt')),
        key: fs.readFileSync(path.join('//fs1/', 'ssl', 'tobitag.key')),
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        compress: true,
        https: true,
        port: 8080,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true,
            __STAGING__: false,
            __LIVE__: false,
        }),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};
