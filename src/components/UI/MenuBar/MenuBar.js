import { useState } from "react";
import "./MenuBar.css";
import MenuPage from "./MenuPage"

function MenuBar(props) {
    const className = ""
   return (
      <div className="menubar-container">
         <div className="menubar">
            {props.pages.map((page) => {
               return (
                  <MenuPage href={page.linkAddress} className={page.className} name={page.name}/>
               );
            })}
         </div>
         <button className="close-menubar-btn">Cancel</button>
      </div>
   );
}

export default MenuBar;
