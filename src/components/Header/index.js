// libs
import React, { useState, useEffect } from "react";
import classNames from "classnames";
// styles
import "./Header.css"
// others
import { iconFooter } from "../../dataSources/iconFooter"
import { titleHeader } from "../../dataSources/titleHeader"

const Header = ({ navbar }) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const classNavbarContainer = classNames("navbar-container", { "navbar-container-active": navbar });
    const classNavbarDesktop = classNames("navbar-desktop", {
        "navbar-desktop-btn-active": (navbar || click)
    });
    const classNavbarList = classNames("navbar-list", { "active": click });
    const classNavbarListDetail = classNames("navbar-list-detail", { "navbar-color-active": navbar })
    const classNavbarListDetailActive = classNames("navbar-list-detail", { "navbar-color-active": navbar }, { "nav-tab-active-scroll": navbar }, { "nav-tab-active": !navbar })
    const classNavbarBtnLogin = classNames("btn-navbar-login", { "navbar-color-btn-active": navbar })

    return (
        <section>
            <nav className={classNavbarContainer}>
                <div className={classNavbarDesktop}>
                    {!navbar && !click ? (<div className="navbar-logo">
                        <a href="#" className="navbar-logo">
                            <img src="/assets/images/Logo.svg" alt="Logo-default" />
                        </a>
                    </div>) : (
                        <div className="navbar-logo">
                            <a href="#" className="navbar-logo">
                                <img src="/assets/images/Title.svg" alt="Logo-default" />
                            </a>
                        </div>
                    )}
                    <div className="navbar-menu-icon" onClick={handleClick}>
                        {!click ? (
                            navbar ? (<img src="/assets/images/Group 30(1).svg" alt="Menu" />)
                                : (<img src="/assets/images/Group 30.svg" alt="Menu" />)
                        ) : (<img src="/assets/images/Vector1.svg" alt="X" />
                        )}
                    </div>
                    <div className="navbar-items">
                        <ul className={classNavbarList}>
                            {
                                titleHeader.map((item, index) => (
                                    <li className={index==0 ? classNavbarListDetailActive :classNavbarListDetail } key={index}>
                                        <a href="#">{item.title}</a>
                                    </li>
                                ))
                            }
                            {click && <>
                                <li className="btn-mobile">
                                    <a href="#">Agendar consulta</a>
                                </li>
                                <li className="btn-mobile-icon-list">
                                    {
                                        iconFooter.map((item, index) => (
                                            <span className="btn-mobile-icon" key={index}>
                                                <img src={item.src} alt={item.alt} />
                                            </span>
                                        ))
                                    }
                                </li>
                            </>
                            }
                        </ul>
                    </div>
                    <div className={classNavbarBtnLogin}>
                        <a href="#">Agendar consulta</a>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header