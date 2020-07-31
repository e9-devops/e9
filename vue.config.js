const webpackOptions = {
    lintOnSave: true,
    configureWebpack: {
        devtool: 'eval',
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~bootstrap/scss/_functions.scss";
                @import "~bootstrap/scss/_mixins.scss";
				@import "~bootstrap/scss/_variables.scss";
				@import "~@/scss/base/variables.scss";
                @import "~@/scss/utilities/mixins.scss";
				`,
            },
        },
    },
    chainWebpack(config) {
        config.module
            .rule('glslify')
            .test(/\.(glsl|frag|vert)$/)
            .use('glslify-import-loader')
            .loader('glslify-import-loader')
            .end()
            .use('raw-loader')
            .loader('raw-loader')
            .end()
            .use('glslify-loader')
            .loader('glslify-loader')
            .end();

        config.module
            .rule('three')
            .test(/three\/examples\/js/)
            .use('imports-loader?THREE=three')
            .loader('imports-loader?THREE=three')
            .end();
    },
    pwa: {
        themeColor: '#D21D1C',
        msTileColor: '#D21D1C',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
        },
    },
};

if (process.env.NODE_ENV === 'production') {
    const CompressionPlugin = require('compression-webpack-plugin');
    webpackOptions.chainWebpack = (config) => {
        config.optimization.splitChunks({
            minSize: 0,
            maxSize: 250000,
            minChunks: 2,
            maxAsyncRequests: 6,
            chunks: 'all',
        });

        config.module
            .rule('glslify')
            .test(/\.(glsl|frag|vert)$/)
            .use('glslify-import-loader')
            .loader('glslify-import-loader')
            .end()
            .use('raw-loader')
            .loader('raw-loader')
            .end()
            .use('glslify-loader')
            .loader('glslify-loader')
            .end();

        config.module
            .rule('three')
            .test(/three\/examples\/js/)
            .use('imports-loader?THREE=three')
            .loader('imports-loader?THREE=three')
            .end();
    };
    webpackOptions.configureWebpack.devtool = 'none';
    webpackOptions.configureWebpack.plugins = [new CompressionPlugin()];
}
module.exports = webpackOptions;
