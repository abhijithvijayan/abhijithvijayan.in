// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');

module.exports = withOffline(
    withPlugins([withCSS, withSass, withImages, withFonts], {
        webpack(config, options) {
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
            return config;
        },

        exportPathMap() {
            return {
                '/': { page: '/' },
            };
        },
    })
);
