// https://colorlib.com/preview/#jackson

import React from "react";
// import { Element } from "react-scroll";
import "./styles.css";
import { Info, Skills, Portfolio, TimelineInfo } from "./info/index";
import {
  InfoCard,
  MenuBar,
  RssInfo,
  SkillItems,
  ResumeItem,
  PortCard,
  Home,
  Timeline
} from "./components/index";

const App = () => {
  return (
    <div className="App">
      <main className="bodyFolio">
        <section className="sideBar">
          <InfoCard className="myinfo" infor={Info} />
          <MenuBar />
          <RssInfo />
          <p>©Copyright ©2020 All rights reserved </p>
        </section>

        <section className="sideInfo">
          <Home className="home" />
          <ResumeItem title="about me" subtitle="who am i?">
            <section className="text">
              <p>
                I'm currently a Graphic Designer with studies of Art Direction.
                Over the past twelve years, I’ve been a Graphic Designer at
                various early-stage startups, co-founded two companies, and
                earned my Master’s in Educational Technology and Applied
                Learning Science from Carnegie Mellon University’s HCII. I'm
                also into oil painting and weight lifting More examples of my
                work are available upon request.
              </p>
            </section>
          </ResumeItem>
          <ResumeItem
            className="experience"
            title="experience"
            subtitle="my experience"
          >
            {TimelineInfo.map(timelinexp => (
              <Timeline key={timelinexp.id} {...timelinexp} />
            ))}
          </ResumeItem>
          <ResumeItem id="myskills" title="my speciality" subtitle="my skills">
            <section className="text">
              <p>
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
              </p>
            </section>
            {Skills.map(skill => (
              <SkillItems key={skill.id} {...skill} />
            ))}
          </ResumeItem>
          <ResumeItem title="education" subtitle="what i studied?">
            <section className="text">
              <p>
                Hi I'm Carlos Lara On her way she met a copy. The copy warned
                the Little Blind Text, that where it came from it would have
                been rewritten a thousand times and everything that was left
                from its origin would be the word "and" and the Little Blind
                Text should turn around and return to its own, safe country.
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </section>
          </ResumeItem>
          <ResumeItem title="my work" subtitle="this is my portfolio">
            <section className="text">
              {" "}
              <p>
                Hi I'm Carlos Lara On her way she met a copy. The copy warned
                the Little Blind Text
              </p>
            </section>

            {Portfolio.map(card => (
              <PortCard key={card.id} {...card} />
            ))}
          </ResumeItem>
          <div name="targetname">point here</div>
        </section>
      </main>
    </div>
  );
};

export default App;
