import "@/styles/globals.css";

import { Poppins, Raleway } from "@next/font/google";
import { hotjar } from "react-hotjar";
import Script from "next/script";
import { useEffect } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ weight: "500", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3416958, 6);
  }, []);

  return (
    <div className={`${raleway.className} ${poppins.className}`}>
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
