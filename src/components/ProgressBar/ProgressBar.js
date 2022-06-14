import "./ProgressBar.css"
import { useState, useEffect } from 'react';


export default function ProgressBar() {

    const [scroll, setScroll] = useState(0);


    useEffect(() => {
        
        let progressBarHandler = () => {
    
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
    
            setScroll( scroll );
        }

        window.addEventListener("scroll", progressBarHandler);
        return () => window.removeEventListener("scroll", progressBarHandler);
    });



  return (
    <div className="progressBarContainer">
        <div className="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
    </div>
  )
}
