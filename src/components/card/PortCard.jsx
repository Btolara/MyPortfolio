import React from "react";
import "./cardstyle.css";

const PortCard = props => {
  return (
    <div className="portCard">
      <article className="portCard__box">
        <div
          className="portCard__header"
          style={{
            backgroundImage: `url(${props.image})`,
            JustifyContent: "flex-start",
            // padding: "0px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="portCard__body">
          <h3 className="portCard__body--title">{props.title}</h3>
          <h4 className="portCard__body--subtitle">{props.subtitle}</h4>
          <h5 className="portCard__body--info">{props.text}</h5>
          <button className="portCard__body--button">
            <h5>Go to the project</h5>
            <img src="arrows.svg" alt="" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default PortCard;
