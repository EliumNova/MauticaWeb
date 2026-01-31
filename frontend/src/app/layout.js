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
  title: "Mautica Tech",
  description:
    "Servicio de celulares en Mar del Plata centro. iPhone, Samsung, Xiaomi, Motorola, PC, Mac y PS4. Presupuesto sin cargo. Atención en el día.",
  applicationName: "Mautica",
  authors: [{ name: "Mauro Deheza" }, { name: "Pablo Acosta" }],
  creator: "Mautica",
  publisher: "Mautica",
  keywords: [
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
    title: "Mautica Tech",
    description:
      "Servicio y mantenimiento IT en Argentina.",
    url: "https://mautica.com.ar",
    siteName: "Mautica Tech",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Mautica Tech",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mautica Tech",
    description:
      "Servicio y mantenimiento IT en Argentina.",
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2085293322324109');
    fbq('track', 'PageView');
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
              telephone: "+5492236203529", // si tenés
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mar del Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: "Mar del Plata",
              sameAs: [
                "https://www.instagram.com/mauticatech",
                "https://wa.me/5492236203529",
              ],
              description:
                "Servicio y mantenimiento IT en Argentina.",
            }),
          }}
        />
        <noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=2085293322324109&ev=PageView&noscript=1"
    alt=""
  />
</noscript>


        {children}
      </body>
    </html>
  );
}
