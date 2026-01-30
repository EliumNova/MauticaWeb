"use client";
import { useEffect, useRef } from "react";

const CalendlyEmbed = ({ onReady }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // evitar cargar el script dos veces
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = initCalendly;
    } else {
      initCalendly();
    }

    function initCalendly() {
      if (!window.Calendly || !containerRef.current) return;

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/mauticatech/consultamautica",
        parentElement: containerRef.current,
      });

      const observer = new MutationObserver(() => {
        const iframe = containerRef.current.querySelector("iframe");
        if (iframe) {
          iframe.onload = () => onReady();
          observer.disconnect();
        }
      });

      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
    }
  }, [onReady]);

  return <div ref={containerRef} style={{ height: "620px" }} />;
};

export default CalendlyEmbed;
