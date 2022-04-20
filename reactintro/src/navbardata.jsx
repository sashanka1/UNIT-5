import "./App.css"
import { Butt } from "./button"
import { Log } from "./logo"
import {Linkd} from "./links"
import{Linkmaindiv} from "./linkdiv"

function Nav(){
    return(
        <div className="navb">
            <Log/>
          <><Linkd/> </>  
            <Butt/>
            

            
        </div>
        
    )
   
}








export {Nav}