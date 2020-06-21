import React from 'react';
import { useState } from 'react';
import './App.css';
import Parent from './Parent';
import context from './context';
import ValueContext from './ValueContext';



function App({ name, age }) {

  const [islit, setlit] = useState(true);
  let value2 = useState(48);
  let value = 81
  return(
    <ValueContext.Provider value = {value2}>
    <context.Provider value = {value}>
    <div className="App">
    <p>
    this room is {islit ? "lit" : "dark"}
   Hello world {name}, {age}
   </p>
    <button onClick={() => {
      setlit(!islit);
    }}>
    Toggle Lit
    </button>
    <Parent></Parent>
    </div>
  </context.Provider>
  </ValueContext.Provider>
  );
}

export default App;
