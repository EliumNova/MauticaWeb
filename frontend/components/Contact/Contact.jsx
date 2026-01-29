"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto pb-10">
      {/* TITULO + TEXTO */}
      <div className="text-center mb-10 flex flex-col items-center">
        <h2 className="right__title mb-6">Contacto</h2>
        <p className="w-7/12 text-center">
          Coordiná una reunión con nosotros en el día y horario que prefieras.
          Elegí el momento que mejor te quede y charlamos sobre tus inquietudes.
        </p>
      </div>

      {/* CTA + MAPA */}
      <div className="contactMapReverse flex flex-col lg:flex-row items-center text-black gap-10">
        {/* CALENDLY */}
        <article className="w-full lg:w-6/12 flex flex-col items-center justify-center text-center px-10">
          <h3 className="text-3xl mb-6 font-semibold">Reservá una cita</h3>

          <p className="mb-4 text-lg">
            Elegí el día y horario que más te convenga.
          </p>

          <div className="w-full rounded-2xl overflow-hidden">
            <InlineWidget
              url="https://calendly.com/mauticatech/consultamautica"
              styles={{ height: "620px" }}
            />
          </div>
        </article>

{/* MAPA */}
<aside className="mapaGoogle w-full lg:w-2/3 flex justify-center">
  <div className="relative mt-24 w-full h-[38rem] rounded-2xl overflow-hidden shadow-xl">

    {/* OVERLAY CLICKABLE */}
    <a
      href="https://maps.app.goo.gl/AKNfAU4iqFs9cVmD7"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10 cursor-pointer"
      aria-label="Abrir ubicación en Google Maps"
    />

    {/* MAPA */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1311602229825!2d-57.55598362361968!3d-37.99740104455628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d99850369bb9%3A0x347f38c7a784501f!2sServicio%20t%C3%A9cnico%20-%20Mautica%20Tech!5e0!3m2!1ses-419!2sar!4v1769560845810!5m2!1ses-419!2sar"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</aside>

      </div>
    </section>
  );
};

export default Contact;
