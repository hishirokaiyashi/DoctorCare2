// libs
import React from 'react'
import { Icon } from "@iconify/react";
// styles
import './Header.css'
const Header = ({ click, navbar, handleClick }) => {
    var navbarContainerClass = "navbar-container";
    var navbarDektopClass = "navbar-desktop";
    var navbarColorLogo = "";
    var navbarColorSpan = "";
    var navbarMenuIconList = "";
    var navbarListLi = "navbar-list";
    var navbarLi = "";
    var btnNavbarLogin = "btn-navbar-login";
    var navbarLiActive = "navbar-list-detail";

    if (navbar) {
        navbarContainerClass += " navbar-container-active";
        navbarColorLogo = "navbar-color-active";
        navbarMenuIconList = "navbar-menu-icon-color-active";
        btnNavbarLogin += " navbar-color-btn-active"
        navbarLi = "navbar-list-detail navbar-color-active";
        navbarLiActive += " navbar-color-active nav-tab-active-scroll";
        if (click) {
            navbarDektopClass += " navbar-desktop-btn-active";
            navbarColorSpan = "navbar-color-span-active";
            navbarListLi += " active";
        } else {
            navbarDektopClass += " navbar-desktop-btn-active";
            navbarColorSpan = "navbar-color-span-active";
        }
    } else {
        navbarColorLogo = "navbar-logo-detail";
        navbarMenuIconList = "navbar-menu-icon";
        navbarLi = "navbar-list-detail";
        navbarLiActive += " nav-tab-active"
        if (click) {
            navbarDektopClass += " navbar-desktop-btn-active";
            navbarColorSpan = "navbar-color-span-active";
            navbarListLi += " active";
        }
    }

    return (
        <section>
            <nav className={navbarContainerClass}>
                <div className={navbarDektopClass}>
                    <div className="navbar-logo">
                        <a href="#" className={navbarColorLogo}>
                            <span className={navbarColorSpan}>Doctor</span>
                            <b className={navbarColorSpan}>Care</b>
                        </a>
                    </div>
                    <div className={navbarMenuIconList} onClick={handleClick}>
                        {!click ? (<Icon icon="heroicons:bars-3-bottom-right" />) : (<Icon icon="ph:x" color="white" />)}
                    </div>
                    <div className="navbar-items">
                        <ul className={navbarListLi}>
                            <li className={navbarLiActive}>
                                <a href="#" >
                                    Início
                                </a>
                            </li>
                            <li className={navbarLi}>
                                <a href="#" >
                                    Sobre
                                </a>
                            </li>
                            <li className={navbarLi}>
                                <a href="#" >
                                    Serviços
                                </a>
                            </li>
                            <li className={navbarLi}>
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
                                        <img src="/assets/images/instagram 1.svg" alt="icon-IG" />
                                    </span>
                                    <span className="btn-mobile-icon">
                                        <img src="/assets/images/facebook 1.svg" alt="icon-FB" />
                                    </span >
                                    <span className="btn-mobile-icon">
                                        <img src="/assets/images/youtube 1.svg" alt="icon-YT" />
                                    </span>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className={btnNavbarLogin}>
                        <a href="#">Agendar consulta</a>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header