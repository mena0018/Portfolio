import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectList from "./components/Project/ProjectList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {

  const [isTouch, setIsTouch] = useState(false);
  let ref = useRef( [] );
  let curseurRef = useRef();

  const addToRef = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };

  const slideY = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0,
        duration: duration || 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideX = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -1000,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideY(ref.current[0]);
    slideX(ref.current[1]);
    slideX(ref.current[2]);
    slideY(ref.current[3]);
  }, []);


  window.addEventListener("touchstart", () => {
    setIsTouch(true);
  });

  window.addEventListener("touchend", () => {
    setIsTouch(false);
  });

  const mousePos = (e) => {
    curseurRef.current.setAttribute(
      "style",
      `top: ${e.pageY - 15}px;
      left: ${e.pageX - 15}px;`
    );
  };

  return (
    <div onMouseMove={mousePos} className="App">
      <div ref={curseurRef}
        className={isTouch ? "hidden" : "curseur-perso"}>
      </div>

      <Navbar />
      <Home />
      <div ref={addToRef}> <About /></div>
      <div ref={addToRef}> <Skills /></div>
      <div ref={addToRef}> <ProjectList /></div>
      <div ref={addToRef}> <Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
