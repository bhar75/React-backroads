import React from "react";
import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title1={"our"} title2={"services"} />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, content } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
