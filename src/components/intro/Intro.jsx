import "./intro.scss";
import { useEffect , useRef  } from 'react';
import { init } from "ityped";


export default function Intro() {
  const textRef = useRef();

  useEffect (()=>{console.log(textRef)}
  ,[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="asts/rnk.png" alt=""/>
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
        <h1>Hi there , I'm</h1>
        <h2>Ronak Talati</h2>
        <h3>Freelance <span ref={textRef}></span></h3>
      </div>
      </div>
    </div>
  )
}

