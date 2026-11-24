
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./component/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  verification: {
    google: "bQWzl9ofg68NIw7sIWYatE1oavYlGN3LVNmV4R0N_UM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${geistMono.variable} ${geistSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
