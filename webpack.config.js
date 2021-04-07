const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
      plugins:[
        new HtmlWebpackplugin({
        title:'管理输出',
        }),
    ],
 mode: 'production',
 optimization: {
   usedExports: true,
 },
};


// const path = require('path');
// //简化了 HTML 文件的创建，以便为你的 webpack 包提供服务
// const HtmlWebpackplugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// //todo  
// // eslint
// // prettier
// // react

// //提升解析速度
// //- 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数。
// //- 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
// //- 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false。

// // 持久化缓存
// // 因为node resolution algorithm在寻找一个node_module的时候非常慢，设计很多的IO操作==>Plug'n'Play
// // https://yarnpkg.com/features/pnp
// // NRA:https://nodejs.org/api/modules.html#modules_all_together

// // 提高生产环境构建速度
// // parallel-webpack：它允许在一个 worker 池中运行 compilation。
// // cache-loader：可以在多个 compilation 之间共享缓存。

// // ts-loader 设置 happyPackMode: true / transpileOnly: true，并使用fork-ts-checker-webpack-plugin 进行类型检查

// // 当require含有表达式expression，就会创建一个上下文，因为在编译时并不知道具体导入什么模块
// // require.context()，可以生成一个上下文
// // https://webpack.docschina.org/guides/dependency-management/

// //npm link：创建一个全局模块并符号链接（symlink）到本地

// module.exports = (env)=>({
//     entry: {
//         index:'./src/index.js',
//     },
//     output: {
//         // 根据内容唯一生成hash值，管理缓存
//         filename: "[name].[contenthash].js",
//         path: path.resolve(__dirname, 'dist'),
//         //每次构建前清理 /dist 文件夹，这样只会生成用到的文件
//         clean: true,
//         // 输出结果不携带路径信息
//         pathinfo:false,
//     },
//     devtool:'inline-source-map',
//     mode: env.production?'production':'development',
//     devServer:{
//         //需要watch的文件夹
//         contentBase: './dist',
//     },
//     module:{
//         rules:[
//             {
//                 test: /\.css$/i,
//                 // 简写模式 {}->''
//                 use:['style-loader','css-loader']
//             }
//         ]
//     },
//     plugins:[
//         new HtmlWebpackplugin({
//         title:'管理输出',
//         }),
//         !env.production&&env.NODE_ENV==='local'&&new BundleAnalyzerPlugin(),
//     ],
//     //https://webpack.docschina.org/plugins/split-chunks-plugin/
//     optimization:{
//         //被哈希转化成的小位数值模块名。有益于长期缓存
//         moduleIds: 'deterministic',
//         // 将运行时代码分离出来，保证自己代码不变时，生成的hash值不变
//         runtimeChunk: 'single',
//         // 将提取到单独的 vendor chunk 文件，特别是第三方库，因为他们少改变，可以更好的命中缓存

//         //缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项
//         splitChunks:{
//             cacheGroups:{
//                 vendor:{
//                     // 配合BundleAnalyzerPlugin 去写正则 提取包
//                     test:/[\\/]node_modules[\\/]/,
//                     // 生成chunk的名字
//                     name: 'vendors',
//                     chunks:'all'
//                 }
//             },
//         }
//     },

//     // //将公共依赖提取到新得chunk  不需要手动去做
//     // optimization:{
//     //     splitChunks:{
//     //         chunks: 'all',
//     //     },
//     // },
// })
