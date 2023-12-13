import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/app/components/NavBar/Navbar";
import { CartProvider } from "./context/cart.context";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneaker Store",
  description: "Loja de Sneaker criada para o projeto final do modulo de React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} w-full h-full`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
