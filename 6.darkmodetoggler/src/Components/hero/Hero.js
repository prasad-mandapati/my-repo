import React from "react";
import "./Hero.css";
import heroimg from "../../assets/phone.svg";
const Hero = ({myTheme}) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Villa Shop Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta
            vitae explicabo, similique dignissimos non aspernatur, alias fugiat
            impedit repellendus necessitatibus quibusdam! Suscipit optio
            laborum, libero nemo maxime quo minus.
          </p>
          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="hero-img --text-center">
          <img src={heroimg} alt="phone" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
