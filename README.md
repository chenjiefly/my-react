## 学习react.js

### 一、环境搭建
1、参考[https://github.com/chenjiefly/my-react](https://github.com/chenjiefly/my-react)
2、遇到问题
* 遇到报错`React is not defined`，且错误位于打包后的文件中
    * 定位到打包后的文件中发现没有引入`import React from 'react';`导致的错误
    * 但实际上源文件中没有显示使用`React`这个变量
    * 而是webpack打包后将HTML片段自动转换为`React.createElement(_app2.default, null)`的形式
    * 相当于是隐式依赖了`React`