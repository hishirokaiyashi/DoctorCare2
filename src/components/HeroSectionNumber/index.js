// libs
import React from 'react'
//styles
import './HeroSectionNumber.css'
// others
import { heroSectionTiltle } from "../../dataSources/heroSectionTiltle"

const HeroSectionNumber = () =>
(
    heroSectionTiltle.map((item, index) => (
        <div className="HeroSection_bottom_nums_list" key={index}>
            <p className="HeroSection_bottom_number">
                {item.num}
            </p>
            <p className="HeroSection_bottom_title">
                {item.title}
            </p>
        </div>
    ))
)

export default HeroSectionNumber