import { Butt } from "./button";
import { Nav } from "./navbardata";
import "./App.css"

function App() {
  const phones = ["Android", "Blackberry", "Windows", "Iphone"];
  const manu = ["Samsung", "Htc", "Micromax", "Apple"];
  return (
    <div className="App">
      <Nav/>
     <div id="container">
       <h1>Mobile Operating sysem</h1>
       <div>
         {
           phones.map((e,ind)=>{
             return(
               <li className="circle">{e}</li>
             )
           })
         }
       </div>
       <div>
         <h1>Mobile Manufacturer</h1>
         <div>
           {
             manu.map((el,index)=>{
               return <li className={index<=1 ?"squre" :"circle"}>{el}</li>
             })
           }
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;
