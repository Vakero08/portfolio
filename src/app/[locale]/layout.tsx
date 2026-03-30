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
import Script from "next/script";


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
            {/* Microsoft Clarity - Se inyecta SOLO en entorno de Producción */}
            {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CLARITY_ID && (
              <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
              </Script>
            )}
            <Analytics />
          </NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
