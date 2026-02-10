import React from "react";
import "./Footer.css";
import Image from "next/image";

import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer__container p-10">
      {/* <div className="footer__first">
        <p className=" lg:w-6/12">
          <strong>
            Siempre listos para trabajar en equipo, brindar las mejores
            soluciones a los usuarios junto a un trato lleno de calidez.
          </strong>
        </p>
      </div> */}
      <div className="footer__second">
        <div className="methods__contact flex flex-col lg:flex-row">
          <div className="method">
            <p className="method__title">Teléfono</p>
            <a href="tel:+54 9 223 620-3529" className="method__text">
              <strong>+54 9 223 620-3529</strong>
            </a>
          </div>
          <div className="method">
            <p className="method__title">Dirección</p>
            <a
              href="https://maps.app.goo.gl/AKNfAU4iqFs9cVmD7"
              className="method__text address">
              Rivadavia 3188 Piso 9, Oficina 94, B7600 Mar del Plata, <br />
              Provincia de Buenos Aires
            </a>
          </div>
          <div className="method">
            <p className="method__title">Correo Electrónico</p>
            <a
              href="mailto:maurito0dehezaok@gmail.com"
              className="method__text">
              <strong>info@mautica.com</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__thirt">
        <div className="img__container">
          <Image
            src="/images/logo-mautica_color.png"
            alt=""
            className="img__footer"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="footer__fourt">
        <div className="flex gap-10 lg:gap-40">
          <a
            href="https://instagram.com/mauticatech"
            className="app instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
          <a
            href="/confirmado/?redirect=whatsapp"
            className="app whatsapp"
            aria-label="Whatsapp">
            <FaWhatsapp className="icon" />
          </a>

          <a
            href="https://www.youtube.com/@Demauzzza"
            className="app youtube"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
