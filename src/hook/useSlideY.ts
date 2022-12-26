import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useSlideY() {
  const slideY = (
    element: any,
    valeurDepart?: number,
    delay?: number,
    duration?: number,
    rotation?: number
  ) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: valeurDepart || -200,
        rotation: rotation || 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0,
        duration: duration || 0.3,
        rotation: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
      }
    );
  };
  return slideY;
}

gsap.config({
  nullTargetWarn: false,
});
