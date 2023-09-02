import "./contact.scss"
import React from "react"

export default function Contact() {

return (
<div className="contact" id="contact"> 
   <div className="left">
    <h2>Contact</h2>
    <form >
    <input type="text" placeholder="Email"/>
    <textarea placeholder="Message"></textarea>
    <button>Submit</button>
    </form>
  </div>

    <div className="right">
      <h2> For More Connect</h2>
      <div className="itemCont">
      <img src="asts/linkdien.png" alt=""/>
      <img src="asts/gitub.png" alt=""/>
      <img src="asts/twiter.jpg" alt=""/>
      </div>
    </div>
    </div>
  )
}
