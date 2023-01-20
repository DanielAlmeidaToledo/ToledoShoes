import React from 'react';
import './BackToTopButton.css';
import {useEffect, useState} from "react";

function BackToTopButton() {
        const[BackToTopButton, setBackToTopButton] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () =>{
                if(window.scrollY > 100){
                    setBackToTopButton(true)
                } else{
                    setBackToTopButton(false)
                }
            })
        }, [])

        const scrollUp = () => {
            window.scrollTo({
                top: "100vh",
                behavior: "smooth"
            })
        }

    return <div>
        {BackToTopButton && (
            <button onClick={scrollUp}>
                ^
            </button>
        )}
    </div>;
}

export default BackToTopButton;