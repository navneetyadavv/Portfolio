import React, { useRef } from "react";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <Footer />
    </>
  );
}

export default App;
