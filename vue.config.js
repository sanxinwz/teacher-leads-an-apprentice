const CompressionPlugin = require('compression-webpack-plugin'),
    productionGzipExtensions = [
        "js",
        "css",
        "svg",
        "woff",
        "ttf",
        "json",
        "html"
    ],
    path = require('path');

const resolve = dir => path.join(__dirname, dir);

const devConfig = {
    /* 启动配置 */
    devServer: {
        open: true,
        inline: true, // 保存时页面刷新
        hot: true, // 保存时局部刷新
        host: 'localhost', // 允许外部ip访问
        port: 9988, // 端口
        https: false, // 启用https
    },
}

const commonConfig = {
    /* 别名/图片转Base64 */
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', resolve('./src/assets/css'))
            .set('apis', resolve('./src/api'))
            .set('static', resolve('./src/assets'))
            .set('views', resolve('./src/views'))
            .set('comps', resolve('./src/components'));
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 20000
            }))
    },
}

const defaultConfig = {
    configureWebpack: {
        plugins: [
            // Gzip
            new CompressionPlugin({
                filename: "[path].gz[query]",
                test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
                threshold: 1024,
                minRatio: 0.8, //压缩率大于0.8的才压缩
                deleteOriginalAssets: false //是否删除原文件
            })
        ],
    },
    productionSourceMap: false //不输出map文件
}


module.exports = {
    publicPath: './',
    ...devConfig,
    ...commonConfig,
    ...defaultConfig
}
