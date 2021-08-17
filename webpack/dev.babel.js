import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './common';

export default merge(
    common,    {
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            historyApiFallback: true,
            compress: true,
            disableHostCheck: true,
        },
        devtool: 'inline-source-map',
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
    }
);
