import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { TitleLine } from "@/components/TitleLine";
import { projects } from "@/resources/content";
import { ArrowUp, Check, Info, LoaderPinwheel, Scan, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";
type Props = {
  params: Promise<{ locale: string }>;
}
export default function SocialAlertCaseStudy({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations('Case2')
  const t1 = useTranslations('Case1')
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className="flex min-h-screen flex-col bg-white  dark:bg-neutral-950 mt-[84px]">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          {t('tag')}
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
          Social Alert
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300 mb-6">
              {t('desc')}
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
              {t('desc-2')}
            </p>

          </div>
          {/* Right Column - Device Mockups */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative aspect-video ">
              {/* Placeholder for project image */}
              <ImageZoom  >
                <Image
                  width={1000}
                  height={1000}
                  src={projects[1].imagen1}
                  alt="Placeholder image case study"

                />
              </ImageZoom>
            </div>
          </div>
        </div>
        {/* Project Details */}
        <div className="grid gap-6 md:grid-cols-3 w-full max-w-6xl mx-auto">
          <div className="border p-4 rounded-md bg-card">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t1('rol')}</h3>
            <p className="text-base font-medium text-black dark:text-white">{t1('tile-rol')}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t1('desc-rol')}</p>
          </div>
          <div className="border p-4 rounded-md bg-card">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t1('equipo')}</h3>
            <p className="text-base font-medium text-black dark:text-white">{t1('equipo-title')}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t1('equipo-desc')}</p>
          </div>
          <div className="border p-4 rounded-md bg-card">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t1('duration')}</h3>
            <p className="text-base font-medium text-black dark:text-white">{t('duration-desc')}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t('duration-desc-2')}</p>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={1} titulo={t1('section1-title')} />
          <p className="my-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('problem-desc')}
          </p>
          <ul className="mb-4 space-y-2 pl-6">
            {[
              t('problem-1'),
              t('problem-2'),
              t('problem-3'),
              t('problem-4'),
              t('problem-5'),
              t('problem-6'),
              t('problem-7'),
            ].map((item, i) => (
              <li key={i} className="relative text-neutral-700 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-500 dark:text-neutral-300 before:dark:bg-neutral-400">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('problem-desc-1')}
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={1} titulo={"Objetivos"} />
          <div className="grid gap-12 md:grid-cols-2 my-8">
            <div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t('objetives')}</h3>
              <ul className="space-y-3">
                {[
                  t('objetives-1'),
                  t('objetives-2'),
                  t('objetives-3'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t('bussines-objetive')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{t('bussines-objetive-1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 dark:text-neutral-300">{t('bussines-objetive-2')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={2} titulo={"User Research"} />
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('user-research')}
          </p>
          <ul className="space-y-2 pl-6">
            {[
              t('research-1'),
              t('research-2'),
              t('research-3'),
              t('research-4')
            ].map((item, i) => (
              <li key={i} className="relative text-neutral-700 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-500 dark:text-neutral-300 before:dark:bg-neutral-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Encuestas a usuarios */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('surveys')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('surveys-desc')}
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ImageZoom>
              <Image
                src="/images/case2/table_case_2.svg"
                alt="Encuestas a usuarios"
                width={1000}
                height={1000}
                className="w-full"
              />
            </ImageZoom>
          </div>
        </div>
      </section>

      {/* Benchmark de plataformas similares */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('benchmark')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('benchmark-desc')}
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ImageZoom>
              <Image
                src="/images/case2/table2_case_2.svg"
                alt="Encuestas a usuarios"
                width={1000}
                height={1000}
                className="w-full"
              />
            </ImageZoom>
          </div>
        </div>
      </section>

      {/* Análisis heurístico */}
      <section className=" px-8 py-16 ">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('heuristic')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('heuristic-desc')}
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ImageZoom>
              <Image
                src="/images/case2/heuristic.svg"
                alt="Encuestas a usuarios"
                width={1000}
                height={1000}
                className="w-full"
              />
            </ImageZoom>
          </div>
        </div>
        {/* UI problemas encontrados */}
        <div className="mx-auto max-w-6xl mt-16">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">UI</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('ui')}
          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('query-creation')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case2/create_query_old.svg"
                      alt="Pantalla 2"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>

            </div>

            {/* Pantalla 2 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('dashboard')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">

                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case2/dashboard_old.svg"
                      alt="Pantalla 2"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>

            </div>
            {/* Pantalla  */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('alert-settings')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case2/alerts_old.svg"
                      alt="Pantalla 2"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-16">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('heatmap')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('heatmap-desc')}

          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('heatmap-query')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[200px] md:h-[340px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case2/query_heat.png"
                      alt="Pantalla 2"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl object-contain"
                    />
                  </ImageZoom>
                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('heatmap-query-desc')}
              </p>

            </div>

            {/* Pantalla 2 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('heatmap-dashboard')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">

                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[200px] md:h-[340px] overflow-hidden bg-background">
                  <ImageCarousel images={[{ src: "/images/case2/Dashboard_heat.png", alt: "Pantalla 2" }, { src: "/images/case2/dash_areamap.png", alt: "Pantalla 2" }]} />

                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('heat-dash')}
              </p>

            </div>


          </div>
        </div>
      </section>



      {/* Insights encontrados */}
      <section className="px-8 pt-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">{t('insight')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('insght-desc')}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Workflow className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">{t('insight-1')}</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                {t('insight-1-desc')}

              </p>
              <ul className="space-y-2 pl-6">
                {[
                  t('insight-item-1'),
                  t('insight-item-2'),
                ].map((item, i) => (
                  <li key={i} className="relative text-neutral-700 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-500 dark:text-neutral-300 before:dark:bg-neutral-400">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">{t('insight-focus-1')}</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Info className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">{t('insight-2')}</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                {t('insight-2-desc')}
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">{t('insight-2-focus')}</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Scan className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">{t('insight-3')}</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                {t('insight-3-desc')}
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">{t('insight-3-focus')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diseño */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={3} titulo={t1('desing')} />
          <p className="mb-12 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 my-8">
            {t('design-desc')}
          </p>
          {/* Creación de consultas */}
          <div className="bg-card p-8 rounded-md border">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('create-query')}</h3>
            <p className="mb-8">{t('create-query-desc')}</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('ste-1')}
                  </span>
                </div>
                <div className="flex items-center justify-center  aspect-ratio-1">
                  <ImageZoom>
                    <Image
                      width={1000}
                      height={1000}
                      src={"/images/case2/Create-query-new.svg"}
                      alt="Placeholder image case study"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{t('input-title')}</h3>
                <p className="text-sm leading-relaxed text-foreground">
                  {t('input-desc')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('to-improve')}
                  </div>
                  <ul>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-1')}</b> {t('to-improve-1-1')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px h-fit">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('step-2')}
                  </span>
                </div>
                <div className="flex items-center justify-center h-[200px] md:h-[310px] overflow-hidden">
                  <ImageZoom>
                    <Image
                      width={1000}
                      height={1000}
                      src={"/images/case2/Create-query-2.svg"}
                      alt="Placeholder image case study"
                      className="rounded-bl-2xl rounded-br-2xl object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-black dark:text-white">{t('verify-query')}</h3>
                  <p className="text-sm leading-relaxed text-foreground">
                    {t('verify-query-desc')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('solving-problem')}
                  </div>
                  <ul>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('problem-solving-1')}</b> {t('problem-solving-1-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('problem-solving-2')}</b> {t('problem-solving-2-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('problem-solving-3')}</b> {t('problem-solving-3-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('problem-solving-4')}</b>{t('problem-solving-4-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Tablero */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('tablero')}</h3>
            <p className="mb-8">{t('tablero-desc')}</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px h-fit">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('tablero-new')}
                  </span>
                </div>
                <div className="flex items-center justify-center  h-[200px] md:h-[310px] overflow-hidden">
                  <ImageCarousel
                    images={[
                      { src: "/images/case2/dash_1.svg", alt: "Pantalla 1" },
                      { src: "/images/case2/dash_2.svg", alt: "Pantalla 2" },
                      { src: "/images/case2/dash_3.svg", alt: "Pantalla 3" },
                      { src: "/images/case2/dash_4.svg", alt: "Pantalla 4" },
                      { src: "/images/case2/dash_5.svg", alt: "Pantalla 5" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{t('tablero-new')}</h3>
                <p className="text-sm leading-relaxed text-foreground">
                  {t('tablero-new-desc')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('to-improve')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-2')}</b>{t('to-improve-2-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-3')}</b> {t('to-improve-3-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-4')}:</b>{t('to-improve-4-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Creación de alertas */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('alert-settings')}</h3>
            <p className="mb-8">{t('alert-settings-desc')}</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('alert-settings')}
                  </span>
                </div>
                <div className="flex items-start justify-center h-[200px] md:h-[410px] overflow-hidden">
                  <ImageZoom>
                    <Image
                      src="/images/case2/alerta_new.svg"
                      alt="Pantalla 1"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{t('alert-settings')}</h3>

                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('to-improve')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-alerts-1')}</b>{t('to-improve-alerts-1-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-alerts-2')}:</b> {t('to-improve-alerts-2-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('to-improve-alerts-3')}:</b> {t('to-improve-alerts-3-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="px-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={4} titulo={"Testing"} />
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('testing-desc')}
          </p>
          <ul className="space-y-3">
            {[
              t('testing-desc-1'),
              t('testing-desc-2'),
              t('testing-desc-3'),
              t('testing-desc-4'),
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solución Final */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 pb-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={5} titulo={"Resultados Finales"} />
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('final-result')}
          </p>
          <ul className="space-y-3">
            {[
              t('final-result-1'),
              t('final-result-2'),
              t('final-result-3'),
              t('final-result-4'),
              t('final-result-5'),
              t('final-result-6'),
              t('final-result-7'),



            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aprendizajes */}
      <section className="px-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={5} titulo={t1('learnings')} />

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('learning-1')}:</strong> {t('learning-1-desc')}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('learning-2')}:</strong>{t('learning-2-desc')}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('learning-3')}:</strong>{t('learning-3-desc')}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 text-md md:text-6xl font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;{t1('more-projects')}/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">{t1('more-projects')}</h2>
          </div>
        </div>
        <div className="flex gap-16 flex-col md:flex-row w-full">
          <CardHorizontalDemo project={projects[0]} index="1" />
          <CardHorizontalDemo project={projects[2]} index="3" />
        </div>
      </section>
    </div>
  );
}
