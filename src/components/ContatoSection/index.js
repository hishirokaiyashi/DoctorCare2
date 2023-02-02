// libs
import React from "react";
//components
import Button from "../Button";
// styles
import "./ContatoSection.css";
//others
import { contatoData } from "../../dataSources/contatoData"

const ContatoSection = () => (
  <section className="ContatoSection_container">
    <div className="ContatoSection_container_detail">
      <div className="ContatoSection_main">
        <div className="ContatoSection_left">
          <p className="ContatoSection_content">
            Entre em contato com a gente!
          </p>
          <div className="ContatoSection_title">
              {
                contatoData.map((item,index) => (
                  <div key={index} className="ContatoSection_title_first">
                    <span className="ContatoSection_title_first_icon">
                      <img src={item.src} alt={item.alt} />
                    </span>
                    <span className="ContatoSection_title_first_content">
                      {item.title}
                    </span>
                  </div>
                ))
              }
          </div>
          <div className="ContatoSection_button">
            <Button />
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
