import { Inter } from "next/font/google";
import type { Metadata } from "next";

import ToasterContext from "./context/ToasterContext";

import "./globals.css";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Messenger Clone",
  description:
    "Generated by create next app, modified by Joachim Susatiyo (JocimSus)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
