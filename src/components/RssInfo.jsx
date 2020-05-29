import React from "react";

const RssInfo = () => {
  return (
    <div
      className="rssinfo"
      style={{
        // marginTop: "1rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignSelf: "center",
        width: "80%"
        //backgroundColor: "purple"
      }}
    >
      <i className="fa fa-facebook-square" />
      <i className="fa fa-instagram" />
      <i className="fa fa-github" />
      <i className="fa fa-linkedin" />
      <i className="fa fa-behance" />
    </div>
  );
};

export default RssInfo;
