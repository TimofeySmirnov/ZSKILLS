import type { Metadata } from "next";
import { Manrope, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./providers/StoreProvider";
import RefreshUserProvider from "./providers/RefreshUserProvider";


const promptSans = Prompt({
  variable: "--font-prompt-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courses constructor",
  description: "Courses constructor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${promptSans.variable} antialiased `}
      >
        <StoreProvider>
          <RefreshUserProvider>
            {children}
          </RefreshUserProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
