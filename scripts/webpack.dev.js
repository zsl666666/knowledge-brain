const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = merge(common, {
  mode: 'development',
  devServer: {
    port: 1177,
    open: true,
    hot: true,
  },
});

// 如果是直接运行这个文件，则启动开发服务器
if (require.main === module) {
  const compiler = webpack(config);
  const devServerOptions = { ...config.devServer };
  const server = new WebpackDevServer(devServerOptions, compiler);

  const runServer = async () => {
    console.log('正在启动开发服务器...');
    await server.start();
  };

  runServer();
} else {
  // 如果是被其他文件引用，则导出配置
  module.exports = config;
}
