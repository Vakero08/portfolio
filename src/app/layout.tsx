import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { quick } from '@/app/ui/fonts';


export const metadata: Metadata = {
  title: "Jhonatan Duran - Diseñador UX/UI",
  description: "Portafolio de Jhonatan Duran - Diseñador UX/UI con experiencia en desarrollo frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body
        className={`${quick.className} antialiased`}
      >
        <ThemeProvider
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
