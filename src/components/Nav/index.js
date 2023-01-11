import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

import './Nav.css'
const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navbar, setNavbar] = useState(false);
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
        <header>
            <nav className={navbar?"navbar-container navbar-container-active":"navbar-container"}>
                <div className={!click ?"navbar-desktop":"navbar-desktop navbar-desktop-btn-active"}>
                    <div className="navbar-logo">
                        <a href="#" className={navbar?"navbar-color-active":"navbar-logo-detail"}>
                            <span className={!click ?"":"navbar-color-span-active"}>Doctor</span>
                            <b className={!click ?"":"navbar-color-span-active"}>Care</b>
                        </a>
                    </div>
                    <div className="navbar-menu-icon" onClick={handleClick}>
                        {!click ? (<Icon icon="heroicons:bars-3-bottom-right"/>):(<Icon icon="ph:x" color="white" />)}
                        {/* <Icon icon={!click ? "heroicons:bars-3-bottom-right" : "ph:x-thin " } /> */}
                    </div>
                    <div className="navbar-items">
                        <ul className={click ? "navbar-list active" : "navbar-list"}>
                            <li className={navbar?"navbar-list-detail navbar-color-active nav-tab-active":"navbar-list-detail tab-active"}>
                                <a href="#" >
                                    Início
                                </a>
                            </li>
                            <li className={navbar ?"navbar-list-detail navbar-color-active":"navbar-list-detail"}>
                                <a href="#" >
                                    Sobre
                                </a>
                            </li>
                            <li className={navbar?"navbar-list-detail navbar-color-active":"navbar-list-detail"}>
                                <a href="#" >
                                    Serviços
                                </a>
                            </li>
                            <li className={navbar?"navbar-list-detail navbar-color-active":"navbar-list-detail"}>
                                <a href="#">
                                    Depoimentos
                                </a>
                            </li>

                            {click && <li className="btn-mobile">
                                    <a href="#">Agendar consulta</a>
                            </li>}
                            {click &&
                                <li className="btn-mobile-icon-list">
                                    <span className="btn-mobile-icon">
                                        <Icon icon="ph:instagram-logo" />
                                    </span>
                                    <span className="btn-mobile-icon">
                                        <Icon icon="iconoir:facebook" />
                                    </span >
                                    <span className="btn-mobile-icon">
                                        <Icon icon="lucide:youtube" />
                                    </span>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className={navbar?"btn-navbar-login navbar-color-btn-active":"btn-navbar-login"}>
                        <a href="#">Agendar consulta</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav