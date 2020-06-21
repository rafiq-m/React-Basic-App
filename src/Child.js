import React from 'react';
import './App.css';
import valueContext from "./ValueContext"



function Parent() {
    let val = React.useContext(valueContext);
    return (
        <div>
        Hello Child {val[0]}
        <button onClick = {() =>{
            val[1](++val[0]);
        }}>Toggle Child</button>
        </div>
    );
}

export default Parent;
