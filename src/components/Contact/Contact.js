import "./Contact.css";
import {useContext, useEffect} from 'react'
import { Context } from '../../context/langContext'
import {dataContact} from "../../constants/contact"
import useSlideY from "../../components/Hook/useSlideY";
import useAddRef from "../../components/Hook/useAddRef";

export default function Contact() {

   const slideY = useSlideY();
   const {ref, addToRef} = useAddRef();
   const {lang} = useContext(Context);

   useEffect(() => {
    slideY(ref.current[0], -200, 0.1, 0.5, 360);
    slideY(ref.current[1], -200, 0.6, 0.5, 360);
   }, [slideY, ref])

  return (
    <div className="container" id="contact">
      <h1 className="title" ref={addToRef}> Contact</h1>
      <div className="container-contact" ref={addToRef}>
        <button className="btn-contact">
          <a href="mailto:rabie.menad07@outlook.com">
            {dataContact[lang]['text']}
          </a>
        </button>
      </div>
    </div>
  );
}
