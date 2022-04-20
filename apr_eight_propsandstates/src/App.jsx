import { useState } from 'react';
import './App.css';

function App() {
  const [val,addState]=useState(0)

  const ina =()=>{
    addState(val+1)
  }
  const dic =()=>{
    if(val==0){
      return
    }
    addState(val-1)
  }
  const dob =()=>{
    addState(val*2)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className={val%2===0 ? "green" :"red"}>{val}</h1>
      <button onClick={()=>ina()}>increase</button>
      <button onClick={()=>dic()}>decrease</button>
      <button onClick={()=>dob()}>double</button>
      </header>
    </div>
  );
}

export default App;
