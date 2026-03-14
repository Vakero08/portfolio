import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { quick } from '@/app/ui/fonts';
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children, params
}: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return notFound();
  setRequestLocale(locale);

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
            <Analytics />
          </NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
