import React from "react";
import Anchor from "../components/Anchor";
import "../styles/education.scss";

export default function Education() {
  return (
    <section className="education" id="education">
      <h3>📚 Education</h3>
      <ul>
        <li>
          <Anchor
            href="http://tdtu.uz/en/home-2-2/"
            text="Tashkent State Technical University"
          />
          <br />
          Automation Engineering (Bachelor) 🎓
          <div className="copyright">
            <div>2017-2021</div>
          </div>
        </li>

        <li>
          <Anchor href="http://strive.school/" text="Strive School" />
          <br />
          Strive School is a Y Combinator company on a mission to train the next
          generation of software engineers. (MERN Stack) 💻
          <div className="copyright">
            <div>2020-2021</div>
          </div>
        </li>

        <li>
          <Anchor href="https://www.wqu.org/" text="WorldQuant University" />
          <br />
          Two months of Bootcamp (Introductory Data Science) 🔬
          <div className="copyright">
            <div>2020-2020</div>
          </div>
        </li>
      </ul>
    </section>
  );
}
