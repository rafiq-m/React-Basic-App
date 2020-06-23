import React from 'react';
import './App.css';
import valueContext from "./ValueContext"
import Child2 from "./Child2"



function Child() {
    let val = React.useContext(valueContext);
    return (
        <div>
        Hello Child {val[0]}
        <button onClick = {() =>{
            val[1](++val[0]);
        }}>Toggle Child</button>
        <Child2></Child2>
        </div>
    );
}

export default Child;
