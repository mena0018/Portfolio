import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ToggleLang from "./components/ToggleLangs.js/ToggleLang";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectList from "./components/Project/ProjectList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useAddRef from "./components/Hook/useAddRef";
import useSlideX from "./components/Hook/useSlideY";
import useSlideY from "./components/Hook/useSlideY";
import ContextProvider from "./context/langContext"; 


function App() {
  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();
  const slideY = useSlideY();

  useEffect(() => {
    slideY(ref.current[0]);
    slideX(ref.current[1]);
    slideX(ref.current[2]);
    slideY(ref.current[3]);
  }, [slideX, slideY, ref]);

  return (
   <ContextProvider>
      <ToggleLang />
      <Navbar />
      <Home />
      <div ref={addToRef}> <About /></div>
      <div ref={addToRef}> <Skills /></div>
      <div ref={addToRef}> <ProjectList /></div>
      <div ref={addToRef}> <Contact /></div>
      <Footer />
    </ContextProvider>
  );
}

export default App;
