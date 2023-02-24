import "@/styles/globals.css";

import { Poppins } from "@next/font/google";
import localFont from "@next/font/local";
import Script from "next/script";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const attila = localFont({
  src: [
    {
      path: "./RoquefortTrial-Strong.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./RoquefortTrial-Semi-Strong.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${attila.className} ${poppins.className}`}>
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
