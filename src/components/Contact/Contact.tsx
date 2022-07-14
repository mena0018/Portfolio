import "./Contact.css";
import { useContext, useEffect, useRef } from 'react'
import { Context } from '../../context/langContext'
import { dataContact } from '../../constants/contact';
import useSlideX from "../../hook/useSlideX";
import useAddRef from '../../hook/useAddRef';
import ContactItem from "./ContactItem";


export default function Contact() {

   const slideX = useSlideX();
   const {lang} = useContext(Context);
   
   let dataToMap: any = dataContact[lang];
   
   const {ref, addToRef} = useAddRef<HTMLDivElement>();
   const h1Ref = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
    slideX(h1Ref.current,  -1500, 0.1, 0.6, "top bottom");
    slideX(ref.current[0], -1500, 0.5, 0.6, "top bottom");
    slideX(ref.current[1], -1500, 0.7, 0.6, "top bottom");
    slideX(ref.current[2], -1500, 0.9, 0.6, "top bottom");
   }, [slideX, h1Ref, ref])


  return (
    <div className="container" id="contact">
      <h1 className="title" ref={h1Ref}> Contact</h1>
      <div className="list-contact" >

          { dataToMap.filter((item: any) => typeof item === "object")
              .map((item: any, index: number) => 

                <div ref={addToRef} key={index} className="container-contact" >
                    <ContactItem 
                        icon={item.icon} 
                        name={item.name} 
                        info={item.info} 
                        link={item.link}
                        contact={item.contact}
                    />
                </div>
          )}
      </div>
    </div>
  );
}
