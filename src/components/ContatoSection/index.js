// libs
import React from "react";
// styles
import "./ContatoSection.css";
const ContatoSection = () => (
  <section className="ContatoSection_container">
    <div className="ContatoSection_container_detail">
      <div className="ContatoSection_main">
        <div className="ContatoSection_left">
          <p className="ContatoSection_content">
            Entre em contato com a gente!
          </p>
          <div className="ContatoSection_title">
            <div className="ContatoSection_title_first">
              <span className="ContatoSection_title_first_icon">
                <img src="/assets/images/map-pin 1.svg" alt="map" />
              </span>
              <span className="ContatoSection_title_first_content">
                R. Amauri Souza, 346
              </span>
            </div>
            <div className="ContatoSection_title_second">
              <span className="ContatoSection_title_second_icon">
                <img src="/assets/images/mail 1.svg" alt="mail" />

              </span>
              <span className="ContatoSection_title_second_content">
                contato@doctorcare.com
              </span>
            </div>
          </div>
          <div className="ContatoSection_button">
            <span className="ContatoSection_button_icon">
              <img src="/assets/images/whatsapp1.svg" alt="mail" className="btn-mail"/>
            </span>
            <span className="ContatoSection_content_button_content">
              Agende sua consulta
            </span>
          </div>
        </div>
        <div className="ContatoSection_right">
          <img
            src="/assets/images/320341431_1839045216473269_7834424503591849043_n.png"
            alt="ContatoSection_right"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContatoSection;
