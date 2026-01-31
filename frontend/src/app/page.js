"use client";

import { useEffect, useState } from "react";
import Us from "../../components/Us/Us";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/Loader/Loader";
import styles from "./page.module.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader solo en primera carga real
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <main
        className={styles.page}
        style={{ opacity: loading ? 0 : 1, transition: "opacity .4s ease" }}
      >
        <Home />
        <Contact />
        <Us />
        <Services />
      </main>

      <Footer />
    </>
  );
}
