import React, { useState } from "react";

const ScrollBar = () => {
    const [width, setWidth] = useState(0)

    window.onscroll = () => {
        const scrollHeight = window.scrollY
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight;
        if( scrollHeight !== 0){
            setWidth(w => {
                return ((scrollHeight/height) * 100 + '%')
            })
        }
    }

    return (
        <div id="scrollbar" className="navbar fixed-top" style={{width: width}}></div>
    );
}
 
export default ScrollBar;