import React from "react";
import "./Us.css";

const Us = () => {
  return (
    <section
      id="us"
      className="container mx-auto flex flex-col lg:flex-row px-10 py-20 items-center gap-10"
    >
      <article className="lg:w-1/2">
        <h2 className="us__title py-5">Sobre Nosotros</h2>
        <p className="text-2xl leading-10">
          Llevamos más de <strong>3 años</strong> dando cuidado a tus dispositivos,
          brindando <strong>calidad</strong> y <strong>calidez</strong> en cada trabajo.
        </p>
      </article>

      <article className="lg:w-1/2">
        <img
          src="/images/office.jpg"
          alt="Taller de reparación Mautica en Mar del Plata"
          loading="lazy"
          className="rounded-2xl shadow-2xl transition duration-500 hover:scale-105 hover:-rotate-1"
          style={{
            transform: "perspective(1200px) rotateY(-10deg) rotateX(2deg)",
          }}
        />
      </article>
    </section>
  );
};

export default Us;
