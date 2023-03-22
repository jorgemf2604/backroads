import SectionTitle from "./SectionTitle";
import { tours } from "../data.js";

function SingleTour({ img, date, title, text, destination, duration, price }) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {destination}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
}

function Tours() {
  return (
    <>
      <section className="section" id="tours">
        <SectionTitle firstWord="featured" secondWord="tours" />
        <div className="section-center featured-center">
          {tours.map((tour) => (
            <SingleTour key={tour.id} {...tour} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Tours;
