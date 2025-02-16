import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";


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
          <p className="font-bold text-zinc-200">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
        </Navbar>
          {/* <div className="absolute blur-3xl opacity-[0.3] justify-self-center hero rounded-full w-[50vw] h-[100vh] z-[0]"></div> */}
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  );
}
