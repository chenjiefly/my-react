import React from 'react';  // 这里的React一定要依赖，webpack编译后会在本文件中用到
import ReactDOM from 'react-dom';

import App from './components/app.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);