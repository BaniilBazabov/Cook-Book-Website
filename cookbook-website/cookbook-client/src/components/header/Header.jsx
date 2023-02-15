import React from "react";
import "./header.css";

import headerImg1 from "./img/headerImg1.png";

export default function Header() {
   return (
      <div className="header">
         <div className="header-container">
            <div className="banner">
               <div className="left-column">
                  <h1>Student cookbook</h1>
                  <h3>Friends and recipes</h3>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Officiis nemo vel
                     <br />
                     repellat assumenda ratione cum corporis ipsa nisi suscipit?
                  </p>
                  <div className="btn">
                     <button type="button">Learn More</button>
                  </div>
               </div>

               <div className="right-column">
                  <img src={headerImg1} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}
