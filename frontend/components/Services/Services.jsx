"use client";

import { useState, useEffect } from "react";
import "./Services.css";

const slides = [
  {
    horizontal: "/images/slides/SLIDE1_HORIZONTAL.JPEG",
    vertical: "/images/slides/SLIDE1_VERTICAL.JPG",
  },
  {
    horizontal: "/images/slides/SLIDE2_HORIZONTAL.jpeg",
    vertical: "/images/slides/SLIDE2_VERTICAL.JPG",
  },
  {
    horizontal: "/images/slides/SLIDE1_HORIZONTAL.JPEG",
    vertical: "/images/slides/SLIDE3_VERTICAL.JPG",
  },
  {
    horizontal: "/images/slides/SLIDE2_HORIZONTAL.jpeg",
    vertical: "/images/slides/SLIDE5_VERTICAL.JPG",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loadedH, setLoadedH] = useState(false);
  const [loadedV, setLoadedV] = useState(false);
  const [show, setShow] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];
  const invert = current % 2 !== 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slides.forEach((slide) => {
      const imgH = new Image();
      imgH.src = slide.horizontal;

      const imgV = new Image();
      imgV.src = slide.vertical;
    });
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [current]);

  useEffect(() => {
    setLoadedH(false);
    setLoadedV(false);
  }, [current]);

  useEffect(() => {
    setShow(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShow(true);
      });
    });
  }, [current]);

  return (
    <section
      id="services"
      className="w-screen flex flex-col items-center py-24 overflow-hidden"
    >
      <h2 className="services__title text-5xl mb-16 text-black">Servicios</h2>

      <div className="relative w-screen h-[34rem] overflow-hidden">
        <div key={current} className="absolute inset-0">
          <div
            className={`flex h-full w-full gap-6 px-20 ${
              invert ? "flex-row-reverse" : ""
            }`}
          >
            {/* Horizontal */}
            <div className="w-[70%] h-full rounded-2xl overflow-hidden">
              <img
                src={slide.horizontal}
                className="w-full h-full object-cover fade-in"
                alt=""
              />
            </div>

            {/* Vertical */}
            <div className="w-[30%] h-full rounded-2xl overflow-hidden">
              <img
                src={slide.vertical}
                className="w-full h-full object-cover fade-in"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Prev */}
        <button
          onClick={prev}
          className="btnNav absolute left-0 top-0 z-20 h-full px-7 text-6xl text-black transition "
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="btnNav absolute right-0 top-0 z-20 h-full px-7 text-6xl text-black transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
