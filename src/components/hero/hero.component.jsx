import React from "react";

import "./hero.styles.scss";

const Header = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className="container">
          <div className="name">Christian Jacobo</div>
          <div className="occupation">Software Developer</div>

          {/*<a href={process.env.PUBLIC_URL + '/docs/resume.pdf'} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Resume</a>*/}
        </div>

        <ul>
          {/*tamaño de Pixeles entre 30 y 100*/
          /* Hacer cuadro o circulo*/
          /*Elegir Direccion izq o der*/}
          <li className="animateToLeft"></li>
          <li className="animateToLeft"></li>
          <li className="animateToLeft"></li>
          <li className="animateToLeft"></li>

          <li className="animateToRight"></li>
          <li className="animateToRight"></li>
          <li className="animateToRight"></li>
          <li className="animateToRight"></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
