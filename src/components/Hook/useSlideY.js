import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useSlideY() {
  
  const slideY = (element, valeurDepart, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: valeurDepart || -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  return slideY;
}