"use client";

import React from "react";
import dynamic from "next/dynamic";
import "./Contact.css";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false },
);

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-12 pt-8 pb-10">
      <div className="contactMapReverse flex flex-col lg:flex-row items-center text-black gap-10">
        {/* CALENDLY */}
        <article className="w-full lg:w-6/12 flex flex-col items-center justify-center text-center">
          {/* <h3 className="text-3xl mb-6 font-semibold">Reservá una cita</h3>
          <p className="mb-4 text-lg">
            Elegí el día y horario que más te convenga.
          </p> */}

          <div className="w-full rounded-2xl overflow-hidden">
            <InlineWidget
              url="https://calendly.com/mauticatech/consultamautica"
              styles={{ height: "620px" }}
            />
          </div>
        </article>

        {/* MAPA */}
        <aside className="mapaGoogle w-full lg:w-2/3 flex justify-center">
          <div className="relative w-full h-[38rem] rounded-2xl overflow-hidden shadow-xl">
            <a
              href="https://maps.app.goo.gl/AKNfAU4iqFs9cVmD7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label="Abrir ubicación en Google Maps"
            />
            <iframe
              title="Ubicación Mautica Tech en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1311602229825!2d-57.5559836!3d-37.997401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d99850369bb9%3A0x347f38c7a784501f!2sMautica%20Tech!5e0!3m2!1ses-419!2sar!4v1710000000000"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
