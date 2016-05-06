import React from 'react';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>姓名列表</h1>
                <ul>
                    <li>{ this.props.nameList }</li>
                </ul>
            </div>
        );
    }
}

export default App;
