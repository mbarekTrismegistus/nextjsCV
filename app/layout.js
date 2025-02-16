import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Link from "next/link";


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
          className={`${geistSans.variable} ${geistMono.variable} relative grid bg-zinc-950 antialiased`}
          >
            <Navbar className="dark w-[100vw] bg-transparent fixed" isBlurred>
        <NavbarBrand>
          <Link href="/" className="font-bold text-zinc-200">Mbarek ETTALEBY</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" className="text-zinc-200" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link aria-current="page" className="text-zinc-200" href="/skills">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-zinc-200" href="/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-zinc-200" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" className="text-[#744e96] rounded-full bg-[#744e96]/30" href="cv" variant="flat">
              Resume
            </Button>
          </NavbarItem>
        </NavbarContent>
        </Navbar>
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  );
}
