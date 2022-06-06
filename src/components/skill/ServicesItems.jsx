import React from "react";
import "./skillitems.css";
// import Ptext from './Ptext';

function ServicesItems({ img, title, desc }) {
  return (
    <div className="s-skills">
      <div className="s-item">
            <div className="s-left">
              <div className="s-img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="s-right">
              <h2 className="s-project-title">{title}</h2>
              <p className="s-project-desc">{desc}</p>              
            </div>
          </div>
    </div>
  );
}

export default ServicesItems;
