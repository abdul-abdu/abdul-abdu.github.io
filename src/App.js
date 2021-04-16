import "./App.scss";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import useSetloader from "./hooks/useSetloader";
import Education from "./sections/Education";
import TechnicalSkills from "./sections/TechnicalSkills";
import Main from "./sections/Main";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Google from "./components/Google";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import Container from "./layouts/Container";

function App() {
  const loading = useSetloader();
  const [darkMode, setDarkMode] = useState(true);

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
        </>
      )}
    </div>
  );
}

export default App;
