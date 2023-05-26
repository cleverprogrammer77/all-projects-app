import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            reprehenderit quam sunt ducimus eos iure, laborum sit expedita
            aspernatur adipisci voluptatem voluptate incidunt aut doloribus
            ipsam? Nemo magnam dicta exercitationem.
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
