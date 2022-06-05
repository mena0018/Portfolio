import Navbar from "./components/Navbar/Navbar";
import ToggleLang from "./components/ToggleLangs.js/ToggleLang";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectList from "./components/Project/ProjectList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./context/langContext"; 
import ThemeContextProvider from "./context/themeContext";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from 'react';


function App() {

  const [start, setStart] = useState(false)


  useEffect(() => {
      const timer = setTimeout(() => {
          setStart(false)
      }, 3000)

      return () => clearTimeout(timer)
  })


  return (
    <ThemeContextProvider>

      {start ? <Loader /> : 
        <ContextProvider>
              <ToggleLang />
              <Navbar />
              <Home />
              <About />
              <Skills />
              <ProjectList />
              <Contact />
              <Footer />
        </ContextProvider>
      }

    </ThemeContextProvider>
  );
}

export default App;
