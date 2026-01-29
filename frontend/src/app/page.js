import Us from "../../components/Us/Us";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";

export default function app() {
  return (
    <>
      <main className={styles.page}>
        <Home></Home>
        <Contact />
        <Us />
        <Services />
      </main>
      <Footer />
    </>
  );
}
