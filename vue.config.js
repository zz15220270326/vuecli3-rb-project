const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@content': path.resolve(__dirname, 'src/components/content'),
        '@request': path.resolve(__dirname, 'src/request'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      }
    }
  },
  chainWebpack: config => {
    // vue-cli3热更新(修复HMR)
    config.resolve.symlinks(true) 
   },
  devServer: {
    port: 5013,
    proxy: {
      '/api': {
        target: 'http://192.168.31.227:50002',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    }
  }
}