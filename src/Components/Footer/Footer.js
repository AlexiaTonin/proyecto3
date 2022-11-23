import React from "react";
import "./footer.css"
import logoPokemon from "../../Assets/pokemon-logo.png"

const Footer = () => {
  return (
      <div className="footer-container">
        <img src={logoPokemon} className="logoP"></img>
        <div className="links-container">
          <a href="./">Acerca de nosotros</a>
          <a href="./">Politicas de privacidad</a>
          <a href="./">Términos y condiciones</a>
        </div>
        <div className="links-container">
          <a href="./">Trabaja con nosotros</a>
          <a href="./">Nuestos desarroladores</a>
          <a href="./">Contacto</a>
        </div>
      </div>
  );
}
 
export default Footer;