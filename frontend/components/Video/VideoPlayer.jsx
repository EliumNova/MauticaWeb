// components/VideoPlayer.js
"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Oculta el video en pantallas pequeñas
    if (window.innerWidth < 425) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Manejo de errores
        console.error("Error al reproducir el video");
      });
    }
  }, [isVisible]);

  if (!isVisible) {
    return; //<div>Video desactivado en pantallas pequeñas.</div>;
  }

  return (
    <div className="video__container">
      <video
        ref={videoRef}
        src="/background.mp4"
        className="video"
        muted
        loop
        preload="auto"
      ></video>
    </div>
  );
};

export default VideoPlayer;
