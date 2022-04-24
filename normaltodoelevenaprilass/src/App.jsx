// import { useState } from 'react';
// import './App.css';

// function App() {
//   // const data ="hello c1"
//   const [chd, shdstate] =useState("")
//   const getdata =(data) =>{
//     console.log("REcive from child",data)
//     shdstate(data)
//   }
//   return (
//     <div className="App">
//      <First datag ={getdata}/>
//      <Second send ={chd}/>
//     </div>
//   );
// }

// function First({datag}){
// // console.log("geeting data from parent ", data)
// const s ="hello  i am child 1"


// return <div onClick={()=>{
//   datag(s)
// }}>first child</div>
// }

// function Second({send}){
//   console.log("recieve from sivling through parent",send)
// }

// export default App;



import './App.css';
import { Todo } from './components/todo';

function App() {
 

  return (
    <div className="App">
   <Todo/>
    </div>
  );
}



export default App;