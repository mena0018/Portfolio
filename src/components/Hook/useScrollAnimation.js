import { useEffect, useState } from "react";

export default function useScrollAnimation() {

    const [animation, setAnimation] = useState();

    useEffect(() => {

    })

    const slideY = (element, start, end, delay, duration) => {
        gsap.fromTo(
      element,
      {
          opacity: 0,
          y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: start,
          end: end,
        },
    }
    );
  };
  
}