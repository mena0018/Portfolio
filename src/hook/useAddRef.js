import { useRef } from "react";

export default function useAddRef() {
  const ref = useRef([]);

  const addToRef = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };
  return {ref, addToRef}

}
