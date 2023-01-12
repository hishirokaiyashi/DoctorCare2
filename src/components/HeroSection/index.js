import React from "react";
import './HeroSection.css'
import { Icon } from '@iconify/react';
const HeroSection = () => {
  return (
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
              <span className="HeroSection_left_button_icon">
                <Icon icon="el:phone-alt" />
              </span>
              <span className="HeroSection_left_button_content">
                Agende sua consulta
              </span>
            </div>
          </div>
          <div className="HeroSection_right">
            <img src="/assets/images/314002953_743397407211109_5520526277855823221_n.png" alt="img_hero_banner" />
          </div>
        </div>
        <div className="HeroSection_bottom_nums">
          <div className="HeroSection_bottom_nums_list">
            <p className="HeroSection_bottom_number">
              +3.500
            </p>
            <p className="HeroSection_bottom_title">
              Pacientes atendidos
            </p>
          </div>
          <div className="HeroSection_bottom_nums_list">
            <p className="HeroSection_bottom_number">
              +15
            </p>
            <p className="HeroSection_bottom_title">
              Especialistas disponíveis
            </p>
          </div>
          <div className="HeroSection_bottom_nums_list">
            <p className="HeroSection_bottom_number">
              +10
            </p>
            <p className="HeroSection_bottom_title">
              Anos no mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
