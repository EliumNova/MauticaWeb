"use client";
import { useEffect, useState } from "react";
import "./Services.css";

const slides = [
  {
    h: "/images/slides/slide1_horizontal.jpeg",
    v: "/images/slides/slide1_vertical.jpg",
  },
  {
    h: "/images/slides/slide2_horizontal.jpg",
    v: "/images/slides/slide2_vertical.jpg",
  },
  {
    h: "/images/slides/slide1_horizontal.jpeg",
    v: "/images/slides/slide3_vertical.jpg",
  },
  {
    h: "/images/slides/slide2_horizontal.jpg",
    v: "/images/slides/slide5_vertical.jpg",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detectar tamaño pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // slider
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
            invert && !isMobile ? "flex-row-reverse" : ""
          }`}>
          {isMobile ? (
            <img
              src={slide.v}
              className="w-full h-full rounded-2xl object-cover"
              alt=""
            />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
