// libs
import React from "react";
//components
import CardServicos from "../CardServicos";
// styles
import "./ServicosSection.css";

const ServicosSection = () => (
  <section className="ServicosSection_container">
    <div className="ServicosSection_container_detail">
      <div className="ServicosSection_top">
        <p className="ServicosSection_top_content">SERVIÇOS</p>
        <h2 className="ServicosSection_top_title">
          Como podemos ajudá-lo
          a se sentir melhor?
        </h2>
      </div>
      <div className="ServicosSection_bottom">
        <CardServicos/>
      </div>
    </div>
  </section>
);

export default ServicosSection;
