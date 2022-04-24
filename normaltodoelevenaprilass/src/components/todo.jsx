import { useState } from "react"

import { Todoinput } from "./todoinput"
import {Singletodo} from "./singletodo"
import {nanoid} from "nanoid"

function Todo(){
const[todoli,settodo] = useState([])
const geti=(tipe)=>{
   const payload ={
       title:tipe,
       status:false,
        id:nanoid(5)
   };
settodo([...todoli,payload])
}
const Handlestatus =(id) =>{  // reciving the id of the to do itoms
   const newarray= todoli.map((e)=>{
        if(e.id===id){
           return{
               ...e,status: !e.status
           } 
        }
        return e;
    })
    settodo(newarray)
}
return(
    <div>
        <Todoinput fff={geti}/>
        {todoli.map((e)=>(
            <Singletodo Handlestatus={Handlestatus} tipe={e}> </Singletodo>
        ))}
    </div>
)
};

export {Todo}