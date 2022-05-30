import React from "react";
import "./skills.css";
import ServicesItems from "./ServicesItems";
import {Services} from "../../data"

function Skills() {
  return (
    <div>
      <h1 className="s-title">Services</h1>
      {Services.map((item) => (
          <ServicesItems key={item.id} img={item.img} title={item.title} desc={item.description} />
        ))}
    </div>
  );
}

export default Skills;
