import "../styles/CV.scss";
import React from "react";
import { Github, Globe, LinkedIn, MailIcon } from "../components/icons";

export default function CV() {
  return (
    <div className="resume_wrapper">
      <div className="resume_left">
        <div className="resume_image">
          <img
            src="https://avatars.githubusercontent.com/u/56096073?v=4"
            alt="Resume_image"
          />
        </div>

        <section className="resume_item resume_namerole">
          <div className="name">Abdug'affor Abdurahimov</div>
          <div className="role">MERN stack developer</div>
        </section>

        <section className="contact">
          <h3 className="title">Contact me at</h3>
          <div className="contact-me-info">
            <MailIcon />
            <small>abdugaffor.abdurakhimov@gmail.com</small>
          </div>
          <div className="contact-me-info">
            <Globe />
            <small>https://abdugaffor-abdurahimov.github.io</small>
          </div>
          <div className="contact-me-info">
            <LinkedIn />
            <small>https://www.linkedin.com/in/abdugaffor-abdurahimov</small>
          </div>
          <div className="contact-me-info">
            <Github />
            <small>https://github.com/abdugaffor-abdurahimov</small>
          </div>
        </section>

        <section className="skills-summary">
          <h3 className="title">Skills Summary</h3>
          <ul>
            <li>HTML/CSS/Sass/Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>NodeJs</li>
            <li>Python</li>
            <li>React</li>
            <li>Redux</li>
            <li>ExpressJs</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Linux</li>
            <li>Azure/Heroku</li>
            <li>Git</li>
          </ul>
        </section>
      </div>

      <div className="resume_right">
        <div className="resume_item resume_namerole">
          <h1 className="name">Abdug'affor Abdurahimov</h1>
          <h3 className="role heading-secondary">MERN stack developer</h3>
        </div>

        <section className="profile">
          <h3 className="heading-secondary">Personal Profile</h3>
          <p>
            I am a full-stack engineer mainly focused on MERN stack development.
            I also know the basics of Django and some Data Science library such
            as Numpy, Pandas, Matplotlib and Seaborn.
          </p>
        </section>

        <section className="resume_education">
          <h3 className="heading-secondary">Education</h3>
          <div className="resume_info">
            <div className="resume_data">
              <small className="year">2017-2021</small>
              <div className="content">
                <p>Tashkent State Technical University</p>
              </div>
            </div>
            <div className="resume_data">
              <small className="year">2020-2021</small>
              <div className="content">
                <p>Strive School</p>
                <small>Full stack javascript development</small>
              </div>
            </div>
            <div className="resume_data">
              <small className="year">2020-2020</small>
              <div className="content">
                <p>WorldQuant University</p>
                <small>Scientific Computing and Python</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
