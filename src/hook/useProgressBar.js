import { useState } from 'react';


export default function useProgressBar() {

    const [scroll, setScroll] = useState(0);


    const progressBar = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;

        setScroll( scroll );
    }

    return {scroll, progressBar};
}