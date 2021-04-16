import React from "react";
import "../styles/tech-skills.scss";

export default function TechnicalSkills() {
  return (
    <section className="Tech-Skills" id="skills">
      <h3>🛠️ Technical Skills</h3>
      <p>
        I'm a full-stack developer focused on the MERN stack. I can learn any
        other technologies. I'm always open to communications and new
        opportunities.
      </p>

      <h4>DevOps</h4>
      <ul className="columns-2">
        <li>
          <img
            src="https://img.shields.io/badge/OS-Linux-informational?style=flat&logo=linux&logoColor=pink&color=2bbc8a"
            alt="OS-Linux"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=pink&color=2bbc8a"
            alt="Shell-Bash"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Tool-Docker-informational?style=flat&logo=docker&logoColor=pink&color=2bbc8a"
            alt="Docker"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Cloud-Azure-informational?style=flat&logo=microsoft-azure&logoColor=pink&color=2bbc8a"
            alt="Cloud-Azure"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Tool-Git-informational?style=flat&logo=git&logoColor=pink&color=2bbc8a"
            alt="Tool-Git"
          />
        </li>
      </ul>

      <h4>Languages</h4>

      <ul className="columns-2">
        <li>
          <img
            src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=pink&color=2bbc8a"
            alt="Code-JavaScript"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=pink&color=2bbc8a"
            alt="Code-TypeScript"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Code-NodeJS-informational?style=flat&logo=node.js&logoColor=pink&color=2bbc8a"
            alt="Code-NodeJS"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&logoColor=pink&color=2bbc8a"
            alt="Code-Python"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/IDE-Vim-informational?style=flat&logo=vim&logoColor=pink&color=2bbc8a"
            alt="OS-Linux"
          />
        </li>
      </ul>

      <h4>Database & Framework</h4>

      <ul className="columns-2">
        <li>
          <img
            src="https://img.shields.io/badge/Tool-Mongo-informational?style=flat&logo=mongodb&logoColor=pink&color=2bbc8a"
            alt="img"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Tool-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=pink&color=2bbc8a"
            alt="img"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=pink&color=2bbc8a"
            alt="Code-React"
          />
        </li>
        <li>
          <img
            src="https://img.shields.io/badge/Code-Express-informational?style=flat&logo=Express&logoColor=pink&color=2bbc8a"
            alt="Code-Express"
          />
        </li>
      </ul>
    </section>
  );
}

// ![](https://img.shields.io/badge/Tools-Mongo-informational?style=flat&logo=mongodb&logoColor=pink&color=2bbc8a)
