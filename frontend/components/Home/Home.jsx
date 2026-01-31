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
  const [loaded, setLoaded] = useState(false);

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // 🔥 importante
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full h-[80vh] mt-4 mb-12">
      <article className="mx-auto max-w-5xl flex flex-col items-center text-center px-6">
        <img
          src="/images/logo-small.svg"
          alt="Mautica Tech"
          className="w-[clamp(180px,20vw,320px)] mb-4"
        />

        <a
          href="https://api.whatsapp.com/send/?phone=5492236203529"
          className="btn__services mt-12"
          target="_blank"
        >
          Contactanos
        </a>

        <div className="relative w-full max-w-xl aspect-[4/3] mt-6">
          <img
            key={current}
            src={images[current]}
            onLoad={() => setLoaded(true)}
            className={`
              absolute inset-0 w-full h-full object-contain
              transition-opacity duration-700
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
            alt="Mautica Tech"
          />
        </div>
      </article>
    </section>
  );
}
