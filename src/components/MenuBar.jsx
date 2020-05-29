import React, { component } from "react";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const MenuBar = () => {
  return (
    <div>
      <ScrollLink
        to="myskills"
        spy={true}
        smooth={true}
        duration={500}
        className="some-class"
        activeClass="some-active-class"
      >
        Skills
      </ScrollLink>
      <nav
        className="menuNav"
        style={{
          lineHeight: "3",
          justifyContent: "space-evenly",
          alignSelf: "center"
        }}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#myskills">Skills</a>
          </li>
          <li>
            <a href="/sideinfo/#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
