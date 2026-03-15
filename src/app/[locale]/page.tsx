import CardHome from "@/components/CardHome";
import { projects } from "@/resources/content";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
}
export default function Home({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black h-full mt-[84px]">


      {/* Hero Section */}
      <section id="inicio" className="mx-auto w-full max-w-6xl px-8 py-26 text-left">

        <h1 className="mb-6 text-5xl font-bold text-black dark:text-white">
          {t('title')} <span className="text-primary dark:text-blue-400">Jhonatan Duran</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-black dark:text-white">
          {t('job-desc')}
        </p>

      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="mb-32 text-center">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 md:text-6xl text-4xl font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;{t('portafolio-title')}/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">{t('portafolio-title')}</h2>
          </div>
        </div>

        <div className="grid gap-20 md:flex md:flex-col md:gap-32 ">
          {projects.map((project, index) => {
            return <CardHome project={project} index={index} key={index} />
          })}

        </div>

      </section>


    </div>
  );
}
