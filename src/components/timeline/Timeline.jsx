import React from "react";
import "./timelinestyle.css";

const Timeline = ({ title, place, city, date, work }) => {
  return (
    <section className="timeline">
      <div className="timeline__left">
        <h1>{title}</h1>
        <h2>{place}</h2>
        <h3>
          {date} | {city}
        </h3>
      </div>
      <div className="timeline__right">
        <p>{work}</p>
      </div>
    </section>
  );
};

export default Timeline;
