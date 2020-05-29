import React from "react";

const SkillItems = ({ title, value, color }) => {
  return (
    <div className="skillItems">
      <div className="skillItems__container">
        <div className="skillItems__title">{title}</div>
        <div className="skillItems__bar">
          <div
            style={{
              id: "",
              backgroundColor: color,
              width: value,
              height: "15px",
              borderRadius: "20px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillItems;
