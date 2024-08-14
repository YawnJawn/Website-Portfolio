import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Works from "./Components/Works/work";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Works/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
