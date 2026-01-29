"use client";

import { useState, useEffect } from "react";
import "./Services.css";

const images = [
  "/images/IMG_0040.png",
  "/images/IMG_0041.png",
  "/images/IMG_0090.png",
  "/images/IMG_0323.png",
  "/images/IMG_0326.png",
  "/images/IMG_0507.png",
  "/images/IMG_1072.png",
  "/images/79A39B31-30FC-430E-8A95-85547AA87D88.png",
];

const images2 = [
  "/images/SLIDE.png",
  "/images/SLIDE1.png",
  "/images/SLIDE2.png",
  "/images/SLIDE3.png",
  "/images/SLIDE4.png",
  "/images/SLIDE5.png",
  "/images/SLIDE6.png",
];

// 🔥 combinamos para bricollage
const slides = images.map((img, i) => ({
  horizontal: img,
  vertical1: images2[i % images2.length],
  vertical2: images2[(i + 1) % images2.length],
}));

export default function Services() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="w-screen flex flex-col items-center py-24 overflow-hidden"
    >
      <h2 className="services__title text-5xl mb-16 text-black">
        Servicios
      </h2>

      <div className="relative w-screen h-[34rem] overflow-hidden">
{slides.map((slide, index) => {
  const invert = index % 2 !== 0;

  return (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-700 ${
        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <div
        className={`flex h-full w-full gap-6 px-12 ${
          invert ? "flex-row-reverse" : ""
        }`}
      >
        {/* Horizontal */}
        <div className="w-[65%] h-full rounded-2xl overflow-hidden">
          <img
            src={slide.horizontal}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Vertical stack */}
        <div className="w-[35%] h-full flex flex-col gap-6">
          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src={slide.vertical1}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src={slide.vertical2}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
})}


        {/* Prev */}
        <button
          onClick={prev}
          className="btnNav absolute left-0 top-0 z-20 flex items-center justify-center h-full px-3 text-6xl text-white bg-black/10 hover:bg-black/30 transition"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="btnNav absolute right-0 top-0 z-20 flex items-center justify-center h-full px-3 text-6xl text-white bg-black/10 hover:bg-black/30 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
