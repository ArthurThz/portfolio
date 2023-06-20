import "./globals.css";
import { Roboto, Outfit } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-roboto",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Portifolio Arthur Theodoro Dev",
  description: "Portfolio pessoal, construido com nextJs e TailwindCss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
