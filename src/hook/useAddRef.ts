import { useRef } from "react";

export default function useAddRef() {
  const ref = useRef([]);
  
  // @ts-ignore
  const addToRef = (element) => {
  // @ts-ignore
    if (element && !ref.current.includes(element)) {
        // @ts-ignore
      ref.current.push(element);
    }
  };
  return {ref, addToRef}
}
