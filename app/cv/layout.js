import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Provider from "../provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "M'barek Ettaleby",
  description: "Mbarek Ettaleby C.V",
};

export default function RootLayout({ children }) {


  return (

    <html lang="en">
        <body
          className={`relative grid bg-zinc-950 antialiased justify-center`}
          >
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  );
}
