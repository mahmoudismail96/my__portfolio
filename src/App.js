import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/projects/projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
