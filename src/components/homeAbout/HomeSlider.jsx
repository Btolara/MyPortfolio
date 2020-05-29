import React from "react";
import "./homestyles.css";

const HomeSlider = () => {
  return (
    <section>
      <section className="homeContainer">
        <article className="home__Izq">
          <h1> 
            Hi! <br /> I'm Carlos
          </h1>
          <h3>100% graphic Designer</h3>
          <button>View my portfolio</button>
        </article>
        <div className="home__cen" />
        <div className="home__Der" />
      </section>
    </section>
  );
};

export default HomeSlider;
