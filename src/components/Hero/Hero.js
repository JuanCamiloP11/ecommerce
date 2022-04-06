import React from 'react';

import '../Hero/Hero.css';

const Hero = ({ title }) => {
  
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <h2>
             ¡Conoce nuestros productos!
          </h2>
        </article>
      </div>
    </section>
  );
};

export default Hero;