// we are using our development webpack configuration for storybook.

const webpack = require('../.webpack/config');
const merge = require('webpack-merge');

module.exports = merge(
    webpack('storybook'),
    {
        module: {
            rules: [
                {
                    test: /\.stories\.tsx?$/,
                    loaders: [
                        {
                            loader: require.resolve('@storybook/addon-storysource/loader'),
                            options: { parser: 'typescript' }
                        }
                    ],
                    enforce: 'pre'
                }
            ]
        }
    }
);