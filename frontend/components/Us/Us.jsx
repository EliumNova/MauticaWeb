import React from "react";

import "./Us.css";

const Us = () => {
  return (
    <section id="us" className="container mx-auto flex flex-row px-10 py-20 items-center">
      <article className="container mx-auto py-5">
        <h2 className="us__title py-5" id="nosotros">
          Sobre Nosotros
        </h2>
        <p className="text-2xl leading-10">
          Llevamos más de <strong>3 años</strong> reparando, reviviendo y
          dándole mantenimiento a tus dispositivos, brindando{" "}
          <strong>calidad</strong> en cada trabajo y <strong>calidez</strong> en
          cada trato brindado.
        </p>
      </article>
      <article className="container mx-auto py-5">
        <img
          src="/images/2025-11-14.webp"
          alt=""
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
