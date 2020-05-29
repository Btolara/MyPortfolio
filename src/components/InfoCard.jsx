import React from "react";

const InfoCard = props => {
  return (
    <div
      style={{
        // lineHeight: "3",
        justifyContent: "space-evenly",
        alignSelf: "center",
        //backgroundColor: "olive"
      }}
    >
      <img src={props.infor.imgsrc} alt="" className="myPhoto" />
      <section className="infocard">
        <h1>{props.infor.name}</h1>
        <h4>{props.infor.proffesion}</h4>
        <div className="email">{props.infor.email}</div>
      </section>
    </div>
  );
};

export default InfoCard;
