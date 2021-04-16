import React from "react";
import Anchor from "../components/Anchor";
import projects from "../data/projects.json";
import "../styles/projects.scss";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="content-wrap">
        <h3>Projects</h3>
        <div className="general">Some of my projects:</div>

        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <Anchor
              href={project.liveUrl}
              text={<img className="project-img" src={project.img} alt="img" />}
            />

            <div>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
            </div>

            {project.usedTechs.map((usedTech, idx) => (
              <img
                className="badge"
                key={idx}
                src={`https://img.shields.io/badge/${usedTech}-informational?style=flat&logo=${usedTech}&logoColor=pink`}
                alt={"usedTech-badge"}
              />
            ))}

            <div>
              <Anchor href={project.feUrl} text="Github frontend" />
              {project.beUrl && (
                <Anchor href={project.beUrl} text="Github backend" />
              )}
              {project.liveUrl && (
                <Anchor href={project.liveUrl} text="See Live" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
