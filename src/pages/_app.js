import "@/styles/globals.css";

import { Inter, Poppins } from "@next/font/google";
import localFont from "@next/font/local";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const attila = localFont({
  src: [
    {
      path: "./RoquefortTrial-Strong.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./RoquefortTrial-Semi-Strong.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${attila.className} ${poppins.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
