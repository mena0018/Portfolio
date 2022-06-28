import "./Contact.css";
import {useContext, useEffect} from 'react'
import { Context } from '../../context/langContext'
import {dataContact} from "../../constants/contact"
import useSlideX from "../../hook/useSlideX";
import useAddRef from "../../hook/useAddRef";

export default function Contact() {

   const slideX = useSlideX();
   const {ref, addToRef} = useAddRef();
   const {lang} = useContext(Context);

   useEffect(() => {
    slideX(ref.current[0], -1500, 0.1, 0.6, "top bottom");
    slideX(ref.current[1], -1500, 0.4, 0.6, "top bottom");
   }, [slideX, ref])

  return (
    <div className="container" id="contact">
      <h1 className="title" ref={addToRef}> Contact</h1>
      <div className="container-contact" ref={addToRef}>
        
        <button className="btn-contact">
          <a href="mailto:rabie.menad07@outlook.com" className="base">
            {dataContact[lang]['text']}
          </a>
          
        </button>
      </div>
    </div>
  );
}
