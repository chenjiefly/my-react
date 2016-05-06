import React from 'react';  // 这里的React一定要依赖，webpack编译后会在本文件中用到
import ReactDOM from 'react-dom';

import App from './components/app.jsx';


// let nameList = [
//     '张三',
//     '李四',
//     '王五'
// ];

ReactDOM.render(
    <div className="container">
        {/*注释...*/}
        <App nameList="['张三', '李四', '王五']" />
    </div>,
    document.getElementById('app')
);
