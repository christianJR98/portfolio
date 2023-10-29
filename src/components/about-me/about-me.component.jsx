import React from "react";

import Title from "../title/title.component";

import "./about-me.styles.scss";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="container pb-5 pt-3">
        <Title text="About me" textIsBlack={true} />

        <div className="row">
          <div className="col-md-12 col-lg-6 pb-4">
            <img
              className="about-me--img"
              src={process.env.PUBLIC_URL + "/img/developer.jpg"}
              alt="chess"
            />
          </div>
          <div className=" col-md-12 col-lg-6">
            <p className="text-justify paragraph">
              I am a software developer who loves to create web apps and
              automate tasks. I started in the programming world because I
              really like the idea that you can make everything you want just by
              writing code. You can solve difficult problems, automate simple
              tasks, or create tools to help people. This idea of creating
              whatever you can imagine just with your computer is amazing.
            </p>
            <p className="text-justify paragraph">
              Besides programming, I like to play the guitar, listen to music,
              play chess, and video games with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
