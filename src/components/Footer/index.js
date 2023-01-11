import React from 'react'
import { Icon } from "@iconify/react";
import './Footer.css'
const Footer = () => {
    return (
        <section className='Footer_container'>
            <div className="Footer_container_detail">
                <div className="Footer_main">
                    <div className="Footer_left">
                        <span className="Footer_logo">
                            Doctor<b>Care</b>
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
                            <Icon icon="ph:instagram-logo" />
                        </span>
                        <span className="Footer_right-icon">
                            <Icon icon="iconoir:facebook" />
                        </span >
                        <span className="Footer_right-icon">
                            <Icon icon="lucide:youtube" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer