 
 import './components.css'

 export const Singletodo =({tipe , Handlestatus})=>{
return(
    <div className={tipe.status ? "lint" : ""}>
        <div>id:{tipe.id}</div>
        {tipe.title} - {tipe.status ? "Done" :"not done"} <button className={tipe.status ? "tog": "tog2"} onClick={()=>Handlestatus(tipe.id)}>T</button>
    </div>
)
}
