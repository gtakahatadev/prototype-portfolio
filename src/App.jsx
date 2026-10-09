import "./App.css";
import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {


  return (
    <>
      <Menu nome="Gabriel" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App;
