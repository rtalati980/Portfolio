import "./portfolioList.scss";
import React from "react";

export default function PortfolioList(pro) 
{
  return (
  <li  className={pro.active ? "portfolioList active": "portfolioList"} onClick={ ()=>pro.setSelected(pro.id)}>
   {pro.title }
  </li> 
  );
}
