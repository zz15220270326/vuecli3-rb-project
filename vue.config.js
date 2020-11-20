const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // ! 视图层页面的组件 alias
        '@views': path.resolve(__dirname, 'src/views'),
        // ! 功能组件  alias
        '@components': path.resolve(__dirname, 'src/components'),
        // ! 功能组件中的多次利用在下次项目中可以抽取的组件  alias
        '@common': path.resolve(__dirname, 'src/components/common'),
        // ! 视图层中的子组件  alias
        '@content': path.resolve(__dirname, 'src/components/content'),
        // ! 封装网络请求的方法  alias
        '@request': path.resolve(__dirname, 'src/request'),
        // ! Vuex管理的仓库  alias
        '@store': path.resolve(__dirname, 'src/store'),
        // ! Vue-Router  alias
        '@router': path.resolve(__dirname, 'src/router'),
        // ! 一些功能函数和常用的数值  alias
        '@utils': path.resolve(__dirname, 'src/utils'),
        // ! 项目公用的资源(主要包括image 和 styles)  alias
        '@assets': path.resolve(__dirname, 'src/assets'),
        // ! 在前端模拟的数据  alias
        '@mock': path.resolve(__dirname, 'src/mock'),
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
        // target: 'http://192.168.31.227:6099',
        target: 'http://192.168.31.227:50002',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    }
  }
}