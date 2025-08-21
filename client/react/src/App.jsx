import NavBar from "./components/navBar.jsx";
import Hero from "./components/heroSection.jsx";
import Experience from "./components/experience.jsx";
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx";
import BibleVerse from "./components/bibleVerse.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <BibleVerse />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
