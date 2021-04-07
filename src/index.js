// 在js中使用css
import { cube,add } from './math.js';
// webpack 4 在导入 CommonJS 模块时，将不再解析为 module.exports 的值，而是为 CommonJS 模块创建一个 artificial namespace 对象
// 动态引入的时候会将引入的包分出去成为另一个js文件？
// https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655

//import('lodash').then(({default:_})=>{}

// import(/* webpackPrefetch: true */ './path/to/LoginModal.js'); => <link rel="prefetch" href="login-modal-chunk.js"> 追加到头部
// 父chunk加载后开始；在限制时间下载
// import(/* webpackPreload: true */ './path/to/LoginModal.js');
// 中等优先级，以并行的方式立即开始
 function component() {

  const element = document.createElement('pre');
  add(1)
  // Lodash, now imported by this script
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());