module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/158a03ec1280c564753d8f62f15c1a52/api',
        // ws : true,
        changeOrigin: true,
        pathRewrite: {
          // '^/index' : ''
        }
      }
    }

  }
}