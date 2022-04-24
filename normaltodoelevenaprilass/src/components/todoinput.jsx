import { Component } from "react"
import { useState } from "react"

import './components.css'

const Todoinput = ({ fff }) => {
  const [tipe, settipe] = useState("")
  return (<div>
    <input className="input" onChange={(e) => {
      settipe(e.target.value)
    }} type="text" placeholder="type here" />

    <button className="butt" onClick={() => {
      fff(tipe)
    }}>click to add</button>

    {/* <div>{tipe}</div> */}
  </div>

  )
}


export { Todoinput }