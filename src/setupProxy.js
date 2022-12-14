const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://3.141.23.218:5000", // 后台服务地址以及端口号
            changeOrigin: true, // 是否开启代理
            pathRewrite: {
                "/api/interview": "/interview", // 代理名称
            },
        })
    );
};