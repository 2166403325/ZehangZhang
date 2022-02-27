/**
 * 配置聚合数据参数
 */
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      //360接口
      '/foo': {
        target: 'https://bang.360.cn',//
        ws: true,
        changeOrigin: true,
        pathRewrite:{//重写路径
            '^/foo':''
        }
      }
    }
  }
}