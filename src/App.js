import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Works from "./Components/Works/work";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Developersetup from "./Components/DeveloperSetup/developersetup";
import Resource from "./Components/Resource/resource"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Works/>
      <Skills/>
      <Resource/>
      <Developersetup/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
