import React, { useReducer } from 'react';
import './App.css';
import numberReducer from './Reducer';



function Child2() {
    let [state,  dispatch] = useReducer(numberReducer, 54);
    return (
        <div>
        Child 2 has age = {state}
        <button onClick = {()=>{
            dispatch({type:'INCREMENT', val: 24});
        }}> increase age</button>       
        <button onClick ={
            () =>{
                dispatch({type:'DECREMENT',val:24})
            }
        }>Decrease Age</button>
        </div>
    );
}

export default Child2;