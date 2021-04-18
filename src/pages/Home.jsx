import React, { useState } from "react";
import Google from "../components/Google";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import useSetloader from "../hooks/useSetloader";
import Container from "../layouts/Container";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Main from "../sections/Main";
import Projects from "../sections/Projects";
import TechnicalSkills from "../sections/TechnicalSkills";
import { Link } from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const loading = useSetloader();
  const sections = [Main, Education, TechnicalSkills, Projects, Footer];
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollProgress />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Google />

          {sections.map((section, idx) => (
            <Container children={section()} key={idx} />
          ))}

          <ScrollToTop />
          <Link
            to="/cv"
            style={{
              color: "yellow",
              position: "relative",
              bottom: "100px",
              left: "100px",
            }}
          >
            RESUME
          </Link>
        </>
      )}
    </div>
  );
}
