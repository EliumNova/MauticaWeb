"use client";
import "./Loader.css";

const Loader = ({ hide }) => {
  return (
    <div className={`loaderOverlay ${hide ? "hide" : ""}`}>
      <div className="loaderBox">
        <img
          src="/images/logo-mautica_color.png"
          alt="Mautica Tech"
          className="loaderLogo"
        />

        <div className="progressBar">
          <div className="progressBarFill" />
        </div>

        <p className="loaderText">Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;
