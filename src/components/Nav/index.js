// libs
import React, { useState, useEffect} from "react";
// components
import Header from "../Header"

const Nav = () => {
    
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <Header 
        navbar={navbar}
        />
    )
}

export default Nav