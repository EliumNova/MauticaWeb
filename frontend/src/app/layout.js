import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "../../components/NavBar/NavBar";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata = {
  metadataBase: new URL("https://mautica.com.ar"),
  title: "Servicio Técnico Celulares en Mar del Plata Centro | Mautica",
  description:
    "Reparación de celulares en Mar del Plata centro. iPhone, Samsung, Xiaomi, Motorola, PC, Mac y PS4. Presupuesto sin cargo. Atención en el día.",
  applicationName: "Mautica",
  authors: [{ name: "Mauro Deheza" }, { name: "Pablo Acosta" }],
  creator: "Mautica",
  publisher: "Mautica",
  keywords: [
    "Servicio técnico Apple",
    "Reparación iPhone",
    "Reparación Mac",
    "Soporte IT",
    "Apple Argentina",
    "reparación de celulares",
    "cambiar pantalla iphone",
    "arreglo de celulares",
    "arreglo iphone",
    "cambiar pantalla celular",
    "técnico de celulares",
    "reparación celular urgente",
    "cambio de batería iphone",
    "reparar celular rápido",
    "técnico celular mar del plata",
    "reparación de celulares mar del plata",
    "técnico celular cerca",
    "reparar celular hoy",
    "reparación urgente celular",
    "arreglo de celulares mdq",
    "arreglo celular hoy",
    "reparación iphone mar del plata",
    "reparación samsung mar del plata",
    "arreglo de pantalla rota",
    "servicio técnico celulares mar del plata",
    "reparación de celulares mar del plata",
    "arreglo de celulares mar del plata",
    "servicio técnico centro mar del plata",
    "reparación iphone mar del plata",
    "arreglo iphone mar del plata",
    "reparación samsung mar del plata",
    "cambio de pantalla iphone mar del plata",
    "cambio de batería iphone mar del plata",
    "celular no prende mar del plata",
    "servicio técnico urgente mar del plata",
    "reparación ps4 mar del plata",
    "reparación de notebook mar del plata",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Mautica Tech - Servicio Técnico Apple",
    description:
      "Servicio técnico especializado en Apple. Reparación de iPhone, Mac y soluciones IT en Argentina.",
    url: "https://mautica.com.ar",
    siteName: "Mautica Tech",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Mautica Tech - Servicio Técnico Apple",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mautica Tech - Servicio Técnico Apple",
    description:
      "Reparación de iPhone, Mac y soluciones IT. Servicio técnico especializado.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17730299811"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17730299811');
          `}
        </Script>
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.js"
          as="script"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <NavBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mautica Tech",
              image: "https://mautica.com.ar/images/logo.png",
              url: "https://mautica.com.ar",
              telephone: "+54XXXXXXXXX", // si tenés
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mar del Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: "Mar del Plata",
              sameAs: [
                "https://www.instagram.com/tuusuario",
                "https://wa.me/54XXXXXXXXX",
              ],
              description:
                "Servicio técnico especializado en Apple. Reparación de iPhone, Mac y soluciones IT en Mar del Plata.",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
