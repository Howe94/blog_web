const assetsPublicPath = process.env.NODE_ENV === 'production' ? '/blogWeb/' : '/blogWeb';
let pages = require('./fileSetting');
const path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}
// 引入插件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Happypack = require('happypack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
module.exports = {

  // 菜单路由配置链接加了 blogWeb
  publicPath: assetsPublicPath,
  outputDir: 'blogWeb',
  pages: {
    ...pages,
    index: {
      entry: 'src/entry/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '技术大脑',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 请求代理
  devServer: {
    proxy: {
      '/blogWeb': {
        target: 'http://8.129.110.202:1002',
        changeOrigin: true,
        pathRewrite: {
          '^/blogWeb': 'http://8.129.110.202:1002' //路径重写
        }
      },
    }
  },
  lintOnSave: true, // 关闭eslint检查
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // js,css代码的最小化压缩
      config.optimization.minimize(true);
      // 为生产环境修改配置...
      config
          .externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter'
          });
      // 可视化包大小分析
      if (process.env.use_analyzer) {
        config
            .plugin('webpack-bundle-analyzer')
            .use(WebpackBundleAnalyzer.BundleAnalyzerPlugin)
            .end();
      }
    } else {
      // 为开发环境修改配置...
    }
    // svg配置
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/svg')) // 表示目录中的文件需要进行 svg-sprite-loader
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        });
    config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        .exclude.add(resolve('src/assets/svg')) // 表示目录中的文件不要进行 url-loader
        .end()
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10240, // 设置小于10k的就base64
          name: 'img/[name].[hash:7].[ext]',
          publicPath: assetsPublicPath
        });
    // 项目中使用引入文件有时候路径比较深，需要使用"../../../xx.js"这种类似的路劲引入，这种方式比较笨，可以使用webpack的别名alias配置来解决。
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
  },
  //Webpack
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"]
            }
          }
        })
      ];
    }
    // 多线程优化构建速度
    config.plugins.push(
        new Happypack({
          loaders: ['babel-loader', 'vue-loader', 'url-loader'],
          cache: process.env.NODE_ENV === 'production' ? false : true,
          threads: 3 // 线程数取决于你电脑性能的好坏，好的电脑建议开更多线程
        })
    );
  },
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
      return args;
    });
  },
  css: {
    // 不用在每一个页面都进行引入样式，就能直接引用。
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/variables.scss';`
      }
    },
    // 打包时禁用顺序检查
    extract: process.env.NODE_ENV === 'production' ? {
      ignoreOrder: true,
    } : false
  },
};