// libs
import React from "react"

// styles
import "./Footer.css"

const Footer = () => (
    <section className="Footer_container">
        <div className="Footer_container_detail">
            <div className="Footer_main">
                <div className="Footer_left">
                    <span className="Footer_logo">
                        <img src="/assets/images/LOGO(FT).svg" alt="LOGO(FT)" />
                    </span>
                    <span className="Footer_subcontent_first">
                        ©2022 - DoctorCare.
                    </span>
                    <span className="Footer_subcontent_second">
                        Todos os direitos reservados.
                    </span>
                </div>
                <div className="Footer_right">
                    <span className="Footer_right-icon">
                        <img src="/assets/images/instagram 1.svg" alt="icon-IG" />
                    </span>
                    <span className="Footer_right-icon">
                        <img src="/assets/images/facebook 1.svg" alt="icon-FB" />
                    </span >
                    <span className="Footer_right-icon">
                        <img src="/assets/images/youtube 1.svg" alt="icon-YT" />
                    </span>
                </div>
            </div>
        </div>
    </section>
)

export default Footer