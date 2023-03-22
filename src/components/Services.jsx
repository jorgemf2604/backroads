import SectionTitle from "./SectionTitle";
import { serviceIcons } from "../data.js";

function ServiceIcon({ icon, title, text }) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
}

function Services() {
  return (
    <>
      <section className="section services" id="services">
        <SectionTitle firstWord="our" secondWord="services" />
        <div className="section-center services-center">
          {serviceIcons.map((icon) => (
            <ServiceIcon key={icon.id} {...icon} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
