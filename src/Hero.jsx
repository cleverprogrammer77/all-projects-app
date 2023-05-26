import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>All Projects at one place</h1>
          <p>
            <b>"Web Development Portfolio:</b> Unveiling a Collection of
            Stunning Projects by <b>Priyanshu Jha.</b> Showcasing a Range of
            Impressive Websites and Web Applications. I have mentioned all small
            and big projects build by me.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="/" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
