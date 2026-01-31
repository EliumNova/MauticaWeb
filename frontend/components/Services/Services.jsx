"use client";
import { useEffect, useState } from "react";
import "./Services.css";

const slides = [
  { h: "/images/slides/SLIDE1_HORIZONTAL.jpeg", v: "/images/slides/SLIDE1_VERTICAL.jpg" },
  { h: "/images/slides/SLIDE2_HORIZONTAL.jpg", v: "/images/slides/SLIDE2_VERTICAL.jpg" },
  { h: "/images/slides/SLIDE1_HORIZONTAL.jpeg", v: "/images/slides/SLIDE3_VERTICAL.jpg" },
  { h: "/images/slides/SLIDE2_HORIZONTAL.jpg", v: "/images/slides/SLIDE5_VERTICAL.jpg" },
];

export default function Services() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  const slide = slides[current];
  const invert = current % 2 !== 0;

  return (
    <section id="services" className="w-screen py-24 overflow-hidden">
      <h2 className="services__title text-5xl mb-16 text-center">Servicios</h2>

      <div className="relative w-screen h-[34rem] px-10">
        <div
          key={current}
          className={`flex h-full gap-6 fade-in ${
            invert ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src={slide.h}
            className="w-[70%] rounded-2xl object-cover"
            alt=""
          />
          <img
            src={slide.v}
            className="w-[30%] rounded-2xl object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
