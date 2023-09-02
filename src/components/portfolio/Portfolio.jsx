import  React from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() 

{
  const [selected,setSelected]= useState("featured");
  const list =[
 { id: "featured", title: "Featured"},
 { id: "app", title: "App"},
 { id: "services", title: "Services"},
 { id: "review", title: "Review" }
  ];

  return (
  <div className="portfolio" id="portfolio"> 
    <h1>Portfolio</h1>
      <ul >
        { list.map(( item ) => (
          <PortfolioList  
          key ={item.id}
          title={item.title} 
          id={item.id}  
          active={selected === item.id} 
          setSelected={setSelected}
          />
        )) }
      </ul>
      <div className="container">
        <div className="item">
          <img alt=""></img>
          <h3>Ecommerce App</h3>
        </div>
        <div className="item">
          <img alt=""></img>
          <h3>Ecommerce App</h3>
          </div>
        <div className="item">
          <img alt="" ></img>
          <h3>Ecommerce App</h3>
        </div>
        <div className="item">
          <img alt=""></img>
          <h3>Ecommerce App</h3>
        </div>
      </div>
    </div>  
  ) 
}
