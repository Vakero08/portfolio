import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { quick } from '@/app/ui/fonts';
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


export const metadata: Metadata = {
  title: "Jhonatan Duran - Diseñador UX/UI",
  description: "Portafolio de Jhonatan Duran - Diseñador UX/UI con experiencia en desarrollo frontend",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};


export default async function RootLayout({
  children, params
}: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return notFound();
  return (
    <html lang={locale}>
      <head>
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body
        className={`${quick.className} antialiased`}
      >
        <ThemeProvider
        >
          <NextIntlClientProvider>
            <Header />

            {children}
          </NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
