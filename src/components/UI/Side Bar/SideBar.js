import { useState } from "react";
import "./SideBar.css";
function SideBar(props) {
   const [additionalClasses, updateAdditionalClasses] = useState("sb-closed");
   const sidebarContainerClassName = "sidebar-container " + additionalClasses;

   function closeSideBar() {
      updateAdditionalClasses("sb-closed");
   }
   function openSidebar() {
      updateAdditionalClasses("sb-opened");
   }
   return (
      <div className={sidebarContainerClassName}>
         <button onClick={openSidebar} className="hamburger">
            <svg width="100%" height="100%">
               <line
                  x1={"0"}
                  x2="30"
                  y1="7"
                  y2="7 "
                  stroke="white"
                  strokeWidth="2.5"
               ></line>
               <line
                  x1={"0"}
                  x2="30"
                  y1="12"
                  y2="12"
                  stroke="white"
                  strokeWidth="2.5"
               ></line>
               <line
                  x1={"0"}
                  x2="30"
                  y1="17"
                  y2="17"
                  stroke="white"
                  strokeWidth="2.5"
               ></line>
            </svg>
         </button>
         <div className="sidebar">
            <button onClick={closeSideBar} className="close-sb-btn">
               X
            </button>
            <div className="sb-page-container">
            {props.pages.map((page,index) => {
               return (
                  <a key={index} className="sb-page" href={page.linkAddress}>
                     {page.name}
                  </a>
               );
            })}
            </div>
         </div>
      </div>
   );
}

export default SideBar;
