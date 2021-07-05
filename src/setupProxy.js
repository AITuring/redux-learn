const createProxyMiddleware = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://baobab.kaiyanapp.com/api/v4/discovery/hot',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        })
    );
};