import React from "react";
import "./projects.css";
import { ProjectsImg } from "../../data";

const projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects_container">
        <div className="headr__projects">
          <h2>Projects</h2>
        </div>

        <div className="container">
          <div className="timeline">
            {ProjectsImg.map(
              ({ id, text1, text2, imgs, hrefDemo, hrefCode }) => {
                return (
                  <div className="timeline-row" key={id}>
                    <div className="timeline-content">
                      <div className="timeline-content-img">
                        <img src={imgs} />
                      </div>
                      <div className="btn">
                        <a href={hrefDemo} className="demo" target="_blank">
                          {text1}
                        </a>
                        <a href={hrefCode} className="codw" target="_blank">
                          {text2}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
