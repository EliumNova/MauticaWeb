"use client";

import React, { useEffect, useState } from "react";
import "./Home.css";

const images = [
  "/images/img-iphone.png",
  "/images/img-mac.png",
  "/images/img-ipad.png",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full h-[80vh] text-gray-800 mt-4 mb-12 pb-4"
    >
      {/* 🔥 H1 SEO – oculto visualmente */}
      <h1 className="sr-only">
        Servicio técnico de celulares en Mar del Plata – Centro | Mautica
      </h1>

      {/* 🔥 Texto SEO visible pero discreto */}
      <p className="sr-only">
        Reparación de celulares en el centro de Mar del Plata. Servicio técnico
        iPhone, Samsung, Xiaomi, Motorola, PC, Mac y PS4. Atención rápida y
        presupuesto sin cargo.
      </p>

      <article className="mx-auto max-w-5xl flex flex-col items-center text-center px-6">
        <img
          src="/images/logo-small.svg"
          alt="Mautica servicio técnico de celulares en Mar del Plata centro"
          className="w-[clamp(180px,20vw,320px)] mb-4"
        />

        <a
          href="https://api.whatsapp.com/send/?phone=5492236203529&text=Hola chicos!+Quisiera+hacerles+una+consulta&type=phone_number&app_absent=0"
          className="btn__services mt-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos
        </a>

        <div className="relative w-full max-w-xl aspect-[4/3] overflow-hidden mt-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={
                index === 0
                  ? "Reparación de iPhone en Mar del Plata"
                  : index === 1
                  ? "Servicio técnico Mac en Mar del Plata"
                  : "Servicio técnico iPad en Mar del Plata"
              }
              className={`
                absolute inset-0 w-full h-full object-contain
                transition-opacity duration-700
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
