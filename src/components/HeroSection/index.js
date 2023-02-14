// libs
import React from "react";
//components
import Button from "../Button";
import HeroSectionNumber from "../HeroSectionNumber";
// styles
import './HeroSection.css'

const HeroSection = () => (
  <section className="HeroSection_container">
    <div className="HeroSection_container_detail">
      <div className="HeroSection_container_main">
        <div className="HeroSection_left">
          <div className="HeroSection_left_detail">
            <p className="HeroSection_left_content">
              BOAS-VINDAS A DOCTORCARE 👋
            </p>
            <h1 className="HeroSection_left_title">
              Assistência médica simplificada para todos
            </h1>
            <p className="HeroSection_left_SubContent">
              Os médicos da DoctorCare vão além dos sintomas para tratar a
              causa raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
          </div>
          <div className="HeroSection_left_button">
            <Button />
          </div>
        </div>
        <div className="HeroSection_right">
          <img src="/assets/images/314002953_743397407211109_5520526277855823221_n.png" alt="img_hero_banner" />
        </div>
      </div>
      <div className="HeroSection_bottom_nums">
        <HeroSectionNumber />
      </div>
    </div>
  </section>
);

export default HeroSection;
