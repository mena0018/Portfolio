import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useSlideX() {
  const slideX = (
    element: any,
    valeurDepart?: number,
    delay?: number,
    duration?: number,
    start?: string,
  ) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: valeurDepart || -1500,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0,
        duration: duration || 0.3,
        scrollTrigger: {
          trigger: element,
          start: start || 'top center',
        },
      },
    );
  };
  return slideX;
}

gsap.config({
  nullTargetWarn: false,
});
