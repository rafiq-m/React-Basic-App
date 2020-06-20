import React from 'react';
import './App.css';
import context from './context';



function Parent() {
    let val = React.useContext(context);
    return (
        <div>
            <p className="App">
                hello World {val}</p>
        </div>
    );
}

export default Parent;
