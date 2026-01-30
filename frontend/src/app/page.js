"use client";

import { useEffect, useState } from "react";
import Us from "../../components/Us/Us";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/Loader/Loader";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    setHideLoader(true);
    setTimeout(() => setLoading(false), 600);
  }, []);

  return (
    <>
      {loading && <Loader hide={hideLoader} />}

      <main className={styles.page}>
        <Home />
        <Contact />
        <Us />
        <Services />
      </main>

      <Footer />
    </>
  );
}
