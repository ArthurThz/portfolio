import "./globals.css";
import { Roboto, Outfit, Open_Sans } from "next/font/google";

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

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "300",
  weight: "500",
  variable: "--font-openSans",
});
export const metadata = {
  title: "Portifolio Arthur Theodoro Dev",
  description: "Portfolio pessoal, construido com nextJs e TailwindCss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${outfit.variable} ${OpenSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
