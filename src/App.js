import React from 'react';
import {useState} from 'react';
import './App.css';



function App({name, age}) {
 
const changeLit = () => {
  setlit(!islit);
}

  const [islit, setlit] = useState(true);

  return <div class = "App"><p>
  this room is {islit ? "lit" : "dark"}
   Hello world {name}, {age}</p>
   <button onClick = {changeLit}>Toggle Lit</button>
   </div>
}

export default App;
