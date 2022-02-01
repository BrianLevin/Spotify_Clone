import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album and some detaiuls</p>
      </div>
      <div className="footer__center">
        <p>Player Controls</p>
      </div>
      <div className="footer__right">
        <p> Volume controls</p>
      </div>
    </div>
  );
}

export default Footer;
