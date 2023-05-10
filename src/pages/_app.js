import "@/styles/globals.css";

import { Lora, Poppins, Raleway, Rubik } from "@next/font/google";
import { hotjar } from "react-hotjar";
import Script from "next/script";
import { useEffect } from "react";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const lora = Lora({
  variable: "--lora-font",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3416958, 6);
  }, []);

  return (
    <div className={`${lora.variable} ${poppins.variable}`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MESD3M4S50"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-MESD3M4S50'); 
      `}
      </Script>

      <Component {...pageProps} />
    </div>
  );
}
