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
              I am a software developer that loves to create web apps and
              automate tasks. I started on the programming world because i
              really like the idea that you can make everything that you want
              just writing code, you can solve difficult problems, automate
              simple tasks or make tools to help the people. This idea of create
              whatever that you can imagine just with your computer is amazing.
            </p>
            <p className="text-justify paragraph">
              Besides programming i like to play guitar, listen to music, play
              chess and videogames with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
