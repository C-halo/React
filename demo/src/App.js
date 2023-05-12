import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <ul className="m1">
                <li>
                    {true ? '11' : '22'}
                </li>
            </ul>
        )
    }
}

export default App;