"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

useEffect(() => {
  const handleScroll = () => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const contactTop = contact.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    setIsVisible(scrollPosition >= contactTop);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
      className={`
        w-full fixed top-0 z-50
        transition-all duration-500
        backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b
        bg-black/30 border-white/20
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <nav className="container mx-auto flex flex-row justify-between items-center py-4 px-5">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/logo-large_w.png"
            alt="Mautica Logo"
            width={1000}
            height={500}
            className="h-[3rem] w-auto transition-all duration-300"
          />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex flex-row space-x-10 font-medium text-white">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-cyan-500 transition">
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("us")} className="hover:text-cyan-500 transition">
              Nosotros
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("services")} className="hover:text-cyan-500 transition">
              Servicios
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-500 transition">
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
