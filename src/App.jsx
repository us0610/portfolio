import "./App.scss";

//Componenets
import Navbar from "./layout/navbar/Navbar";

//section
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
