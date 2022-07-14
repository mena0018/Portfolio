import { useRef } from "react";

export default function useAddRef<T=unknown>() {
  const ref = useRef<T[]>([]);
  
  const addToRef = (element: T) => {

    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };
  return {ref, addToRef}
}
