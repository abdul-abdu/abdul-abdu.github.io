import React, { useContext } from "react";
import Google from "../components/Google";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import Container from "../layouts/Container";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Main from "../sections/Main";
import Projects from "../sections/Projects";
import TechnicalSkills from "../sections/TechnicalSkills";
import { Link } from "react-router-dom";
import { ThemeContext, Themes } from "../contexts/theme";

export default function Home({ loading }) {
  const [theme] = useContext(ThemeContext);
  const sections = [Main, Education, TechnicalSkills, Projects, Footer];

  return (
    <div className={`App ${theme === Themes.dark ? "dark" : "light"}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <Google />

          {sections.map((section, idx) => (
            <Container children={section()} key={idx} />
          ))}

          <ScrollToTop />
          <Link
            to="/cv"
            style={{
              color: "dark",
              position: "fixed",
              bottom: "30px",
              left: "10px",
              background: "white",
            }}
          >
            RESUME
          </Link>
        </>
      )}
    </div>
  );
}
