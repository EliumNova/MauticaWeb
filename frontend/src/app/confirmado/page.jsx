"use client";

import { useEffect } from "react";

export default function Confirmado() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect === "whatsapp") {
      window.location.href =
        "https://api.whatsapp.com/send?phone=5492236203529&text=Hola%20Mautica%20Tech%20quiero%20hacer%20una%20consulta";
    }
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/images/logo-small.svg"
        alt="Mautica Tech"
        className="w-[clamp(180px,20vw,280px)] mb-8"
      />

      <h1 className="text-2xl font-semibold mb-4">Gracias por visitarnos</h1>

      <footer className="absolute bottom-6 text-sm opacity-60">
        Mautica Tech™ 2026
      </footer>
    </main>
  );
}
