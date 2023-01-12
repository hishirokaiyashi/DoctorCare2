import React from "react";
import "./ServicosSection.css";
import { Icon } from "@iconify/react";
const ServicosSection = () => {
  return (
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
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
              Problemas digestivos
            </p>
            <p className="ServicosSection_bottom_card_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
            Saúde Hormonal 
            </p>
            <p className="ServicosSection_bottom_card_content">
            Amet minim mollit non deserunt
            
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
            Bem-estar mental
            </p>
            <p className="ServicosSection_bottom_card_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
            Cuidados Pediátricos
            </p>
            <p className="ServicosSection_bottom_card_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
            Autoimune e Inflamação
            </p>
            <p className="ServicosSection_bottom_card_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="ServicosSection_bottom_card">
            <p className="ServicosSection_bottom_card_icon">
              <Icon icon="ic:baseline-check" />
            </p>
            <p className="ServicosSection_bottom_card_tile">
            Saúde do Coração
            </p>
            <p className="ServicosSection_bottom_card_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
