// libs
import React, { useState, useEffect} from "react";
// components
import Header from "../Header"

const Nav = () => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <Header 
        click={click}
        navbar={navbar}
        handleClick={handleClick}
        />
    )
}

export default Nav