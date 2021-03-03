// // 引入依赖模块
const fs = require("fs");
let path = require('path');
let pages = {};
let fileObj = {
};

// 引入依赖模块

// 先序深度优先同步获取文件夹
function findDirDepSync(pathName, fileName) {
  // 获取根文件夹的 Stats 对象
  let statObj = fs.statSync(pathName);
  // 检查该文件夹的是否是文件夹
  if (statObj.isDirectory()) {
    // 查看文件夹内部
    let dirs = fs.readdirSync(pathName);

    if (dirs.includes('router')) {
      let jsFile, htmlFile;
      dirs.forEach(value => {
        if (value.indexOf('.html') >= 0) {
          htmlFile = value;
        }
        if (value.indexOf('.js') >= 0) {
          jsFile = value;
        }
      });
      if (!jsFile || !htmlFile) {
        console.warn('没有入口或模板文件');
        return false;
      }
      pages[fileName] = {
        entry: pathName + '/' + jsFile,
        template: pathName + '/' + htmlFile,
        filename: `${fileName}.html`,
        title: fileObj[fileName],
        chunks: ['chunk-vendors', 'chunk-common', fileName]
      };
    }
    else {
      // 将内部的文件和文件夹拼接成正确的路径
      dirs.forEach(dir => {
        findDirDepSync(path.join(pathName, dir), dir);
      });
    }
  }
}

// 调用
findDirDepSync("src/views", 'pages');
module.exports = pages;