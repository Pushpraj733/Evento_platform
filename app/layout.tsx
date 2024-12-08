import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";


const poppins = Poppins({
  // src: "./fonts/GeistVF.woff",
  subsets:['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600','700'],
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Evento",
  description: "Evento is a platform for event management.",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (

    <ClerkProvider>
    <html lang="en">

      <body className={poppins.variable}>{children}</body>
      
    </html>
    </ClerkProvider>

  );
}
