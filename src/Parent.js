import React from 'react';
import './App.css';
import context from './context';
import Child from "./Child"



function Parent() {
    let val = React.useContext(context);
    return (
        <div>
            <p className="App">
                hello World {val}</p>
                <Child></Child>
        </div>
    );
}

export default Parent;
