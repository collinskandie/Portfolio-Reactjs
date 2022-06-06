import React from "react";
import "./skills.css";
import ServicesItems from "./ServicesItems";
import { Services } from "../../data";

function Skills() {
  return (
    <div className="container">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Some of the service I provide</p>
      </div>
      <div className="all-skillitems">
        {Services.map((item) => (
          <ServicesItems
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
