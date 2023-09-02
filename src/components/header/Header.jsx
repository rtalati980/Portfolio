import "./header.scss"
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import { Typography } from "@mui/joy";
import React from "react"

export default function header({menuOpen,setMenuOpen}) {
  return (

<div className={"header " +(menuOpen && "active") }>  
      <div className="wrapper">
      <div className="left">
      <a href="#intro" className="logo">genius.io</a>
      <div className="itemContainer">
      <Avatar   size="sm" ></Avatar>
      <h4>+919828524053</h4>
      <Badge  color="black"  >
      <Typography fontSize="xl">💌</Typography>
      </Badge>
      <h4>ronakjain980@gmai.com</h4>
      </div>
      </div>
     <div className="right"> 
     <div className="hamburgur" onClick={()=>setMenuOpen(!menuOpen)}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      </div>
     </div>
     </div>
    </div>
  )
}
