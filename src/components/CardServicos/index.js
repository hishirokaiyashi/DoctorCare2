//libs
import React from 'react'
//styles
import './CardServicos.css'
//others
import { servicosData } from "../../dataSources/servicosData"

const CardServicos = () =>  (
        servicosData.map((item,index) => (
            <div className="ServicosSection_bottom_card" key={index}>
                <p className="ServicosSection_bottom_card_icon">
                    <img src={item.src} alt={item.alt} />
                </p>
                <p className="ServicosSection_bottom_card_tile">
                    {item.title}
                </p>
                <p className="ServicosSection_bottom_card_content">
                    {item.content}
                </p>
            </div>
        ))
    )

export default CardServicos