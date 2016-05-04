import React from 'react';

let nameList = [
    '张三',
    '李四',
    '王五'
];

class App extends React.Component {
   render() {
        return (
            <div className="app">
                <h1>姓名列表</h1>
                <ul>
                    <li>{ nameList }</li>
                </ul>
            </div>
        );
   }
}

export default App;
