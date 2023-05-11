import React from "react";
import "./Skills.css";
import { imgs } from "../../data";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="contaenr">
        <div className="skills_headr">
          <h2>Skills</h2>
        </div>
        <div className="imgs__skills__contaenr">
          {imgs.map(({ id, img, text }) => {
            return (
              <div className="img__contaenr" key={id}>
                <img src={img} alt="skills img" />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
