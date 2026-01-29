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
<section id="home" className="w-full text-gray-800 mt-4 pb-4">
  <article className="mx-auto max-w-5xl flex flex-col items-center text-center px-6">

    <img
      src="/images/logo-small.svg"
      alt="Logo"
      className="w-[clamp(180px,20vw,320px)] mb-4"
    />

    <a
      href="https://api.whatsapp.com/send/?phone=5492236203529&text=Hola chicos!+Quisiera+consultar+por+una+reparación&type=phone_number&app_absent=0"
      className="btn__services mt-6"
      target="_blank"
      rel="noopener noreferrer"
    >
      Conoce Más
    </a>

    <div className="relative w-full max-w-xl aspect-[4/3] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Preview"
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
