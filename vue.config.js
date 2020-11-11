module.exports = {
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://api.poem.d-hunter.top', // API服务器的地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
