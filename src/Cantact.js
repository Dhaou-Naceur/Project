import React, { Component } from "react";
import "./Container.css";

class Contact extends Component {
  render() {
    return (
      <div class="card1">
        <h5 class="card-title">
          <h2>
            {" "}
            Contactez-nous
            <br />
          </h2>
           Notre équipe est à votre service pour vous répondre
          dans les plus brefs délais.
        </h5>
        <div className="phonenumber">
          <img
            className="tel"
            src="https://image.freepik.com/iconen-gratis/telefoon-rinkelen_318-33481.jpg"
          />

          <p class="card-text">0021671568431</p>
        </div>

        <div className="phonenumber">
          <img
            className="portable"
            src="https://previews.123rf.com/images/pixelae/pixelae1712/pixelae171200007/91281143-ic%C3%B4ne-de-smartphone-dans-le-style-de-l-iphone-pictogramme-de-t%C3%A9l%C3%A9phone-portable-dans-un-style-branch%C3%A9-pl.jpg"
          />

          <p class="card-text">0021620922714</p>
        </div>
        <div className="phonenumber">
          <img
            className="email"
            src="https://n6-img-fp.akamaized.net/icones-gratuites/forme-email-enveloppe-de-contour-avec-des-coins-arrondis_318-49938.jpg?size=338"
          />

          <p class="card-text">Parkini@gmail.com</p>
        </div>
        <div className="phonenumber">
          <img
            className="email"
            src="data:image/png;base64,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"
          />

          <p class="card-text">Rue Lac 1 , immeuble Omrane App 14</p>
        </div>
      </div>
    );
  }
}
export default Contact;
