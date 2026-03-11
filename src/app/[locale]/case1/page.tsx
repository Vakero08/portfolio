import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { projects } from "@/resources/content";
import { Check, Clock, Delete, Dot, HelpCircle, IterationCcw, Repeat, Repeat1, Repeat1Icon, Repeat2, Repeat2Icon, SeparatorHorizontal, Settings, X } from "lucide-react";
import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";
import { TitleLine } from "@/components/TitleLine";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
}
export default function TokinAiCaseStudy({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations('Case1');
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black mt-[84px]">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16 ">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          {t('tag')}
        </div>

        <h1 className="mb-8 text-6xl font-bold text-black dark:text-white">
          TokinAi
        </h1>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Description */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('desc')}            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('desc2')}            </p>


          </div>

          {/* Right Column - Device Mockups */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-video ">
              {/* Placeholder for project image */}
              <ImageZoom  >
                <Image
                  width={1000}
                  height={1000}
                  src={projects[0].imagen1}
                  alt="Placeholder image case study"

                />
              </ImageZoom>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details */}
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-6xl mx-auto xl:px-0 px-2">
        <div className="border p-4 rounded-md bg-card">
          <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t('rol')}</h3>
          <p className="text-base font-medium text-black dark:text-white">{t('tile-rol')}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t('desc-rol')}</p>
        </div>
        <div className="border p-4 rounded-md bg-card">
          <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t('equipo')}</h3>
          <p className="text-base font-medium text-black dark:text-white">{t('equipo-title')}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t('equipo-desc')}</p>
        </div>
        <div className="border p-4 rounded-md bg-card">
          <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{t('duration')}</h3>
          <p className="text-base font-medium text-black dark:text-white">{t('duration-title')}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t('duration-desc')}</p>
        </div>
      </div>
      {/* El Problema Section */}
      <TitleLine numero={1} titulo={t('section1-title')} />

      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold  dark:text-blue-400">{t('section1-desc')}</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('section1-desc2')}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('section1-desc3')}            </p>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <TitleLine numero={2} titulo={"User Research"} />
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="">

            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('section2-title')}</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('section2-desc')}
            </p>

            {/* Competitive Analysis */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left - Image */}
              <div className="rounded-lg">
                <div className="aspect-video rounded bg-white dark:bg-gray-800 object-cover">
                  <ImageZoom>
                    <Image
                      width={1000}
                      height={1000}
                      src={"/images/pippit.svg"}
                      alt="Competitive image"
                    />
                  </ImageZoom>
                </div>
              </div>

              {/* Right - Description */}
              <div>
                <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">Pippit</h4>
                <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {t('pippit-desc')}                </p>

                <div className="mb-6">
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">{t('fortaleza-title')}</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">

                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('fortaleza-1')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('fortaleza-2')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('fortaleza-3')}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">{t('debilidaddes-title')}</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('debilidad-1')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('debilidad-2')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">{t('debilidad-3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surveys & Insights Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('survey-subtitle')}</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('survey-desc')}            </p>

            <div className="mb-10 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-card/60">
              <table className="min-w-full divide-y divide-gray-200 text-left text-sm dark:divide-gray-700">
                <thead className="bg-card">
                  <tr>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      {t('survey-problem-title')}
                    </th>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      <span className="hidden sm:inline">{t('survey-problem-title-2')} (80)</span>
                      <span className="sm:hidden">{t('survey-problem-title-2-1')}</span>
                    </th>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-1')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">69</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">86%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-2')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">43</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">53%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-3')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">46</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">58%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-4')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">32</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">40%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-5')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">44</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">55%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-6')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">67</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">83%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      {t('survey-item-7')}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">62</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">77%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('insights-subtitle')}</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('insights-desc')}            </p>

            {/* Insights Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <Clock size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{t('insight-time')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('insight-time-des')}
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <Settings size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{t('settings')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('settings-desc')}
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <HelpCircle size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{t('unknown')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('unknown-desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{t('user-person-subtitle')}</h3>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {t('user-person-desc')}
        </p>
        <div className="grid gap-6 md:grid-cols-3">

          {/* Persona 1: Emprendedor sin tiempo ni conocimiento */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                CH
              </div>
              <div>
                <p className="font-semibold text-black dark:text-white">Carlos Herrera</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('user-1-desc')}</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              {t('user-1-comment')}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{t('user-target')}</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-1-objetive-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-1-objetive-2')}
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{t('user-frustraitions')}</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-1-frustration-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-1-frustration-2')}
                </li>
              </ul>
            </div>
          </div>

          {/* Persona 2: Community Manager buscando ideas */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-500 dark:text-violet-300 font-bold text-lg shrink-0">
                VT
              </div>
              <div>
                <p className="font-semibold text-black dark:text-white">Valentina Torres</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('user-2-desc')}</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              {t('user-2-comment')}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{t('user-target')}</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-2-objetive-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-2-objetive-2')}
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"> {t('user-frustraitions')} </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-2-frustrations-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-2-frustrations-2')}
                </li>
              </ul>
            </div>
          </div>

          {/* Persona 3: Emprendedora digital - simple y minimalista */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-300 font-bold text-lg shrink-0">
                SM
              </div>
              <div>
                <p className="font-semibold text-black dark:text-white">Sofía Mora</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('user-3-desc')}</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              {t('user-3-comment')}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"> {t('user-target')} </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-3-objetive-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  {t('user-3-objetive-2')}
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"> {t('user-frustraitions')} </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-3-frustrations-1')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  {t('user-3-frustrations-2')}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Design Section */}
      <TitleLine numero={3} titulo={t('desing')} />
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('design-desc')}
            </p>
            {/* <ul className="list-disc list-inside space-y-2 text-foreground/80 ">
              <li className="ml-4"> <b>Simplificar los flujos de trabajo complejos:</b> para minimizar el tiempo que deberían ocupar para crear contenido.</li>
              <li className="ml-4"> <b>Diseño para la audiencia objetivo:</b> teniendo en cuenta que los emprendedores muchos desconocen o no manejan tecnología tan bien. Se tiene en cuenta para el diseño sea más amigable.</li>
              <li className="ml-4"> <b>Design System:</b> Unificar el diseño visual con un sistema de colores coherente, garantizando al mismo tiempo el pleno cumplimiento de las normas de accesibilidad.</li>
              
            </ul> */}

            {/* Personalizacion – Iteraciones (Figma section) */}
            <div className="mt-10 rounded-3xl  px-6 py-10 text-foreground dark:bg-card">
              {/* Header */}
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-primary" />
                <h4 className="text-2xl font-bold text-primary">{t('custom-settings')}</h4>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-foreground md:text-base">
                {t('custom-settings-desc')}
              </p>

              {/* Screens row */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {/* Pantalla 1 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('custom-step-1')}</h1>
                  <div className="rounded-2xl border  bg-muted p-px">
                    <div className="flex items-center gap-2 border-b  px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/onboard_1.svg"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    <b>{t('step-1')}:</b> {t('custom-step-1-desc')}
                  </p>
                </div>

                {/* Pantalla 2 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('custom-step-2')}</h1>
                  <div className="rounded-2xl border  bg-muted p-px">

                    <div className="flex items-center gap-2 border-b  px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/onboarding_2.svg"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    <b>{t('step-2')}:</b> {t('custom-step-2-desc')}
                  </p>
                </div>

                {/* Pantalla 3 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('custom-step-3')}</h1>
                  <div className="rounded-2xl border  bg-muted p-px">
                    <div className="flex items-center gap-2 border-b  px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/onboarding_3.svg"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    <b>{t('step-3')}:</b> {t('custom-step-3-desc')}
                  </p>
                </div>
              </div>

              {/* Hallazgo */}
              <div className="mt-8 flex flex-col  gap-4 md:flex-row md:items-center">
                <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-6 py-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#bb4d00]">
                  {t('findings')}
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground">
                  {t('findings-desc')}

                </p>
                <ul className="list-disc list-inside">
                  <li className="text-sm leading-relaxed text-foreground">{t('findings-1')}</li>
                  <li className="text-sm leading-relaxed text-foreground">{t('findings-2')}</li>
                  <li className="text-sm leading-relaxed text-foreground">{t('findings-3')}</li>
                  <li className="text-sm leading-relaxed text-foreground">{t('findings-4')}</li>
                  <li className="text-sm leading-relaxed text-foreground">{t('findings-5')}</li>
                </ul>
              </div>

              {/* Iteraciones */}
              <div className="mt-10 space-y-12">
                {/* Iteración 1 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>{t('iteration')} 1</span>
                  </div>
                  <div className="mt-4 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border  bg-muted p-px h-auto">
                      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                        <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                        <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                        <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                          v2
                        </span>
                      </div>
                      <div className="flex items-center justify-center h-[210px] overflow-hidden sm:h-[350px]">
                        <ImageCarousel
                          images={[
                            { src: "/images/case1/onboard_1_1.svg", alt: "Pantalla 1" },
                            { src: "/images/case1/onboarding_2.svg", alt: "Pantalla 2" },
                            { src: "/images/case1/onboarding_3.svg", alt: "Pantalla 3" },
                          ]}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                          {t('solution-proposal')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('solution-proposal-desc')}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                          {t('problems-findings')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('problems-findings-desc')}                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Iteración 2 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>{t('iteration')} 2</span>
                  </div>
                  <div className="mt-4 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border  bg-muted p-px">
                      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                        <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                        <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                        <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                          v3 — Final
                        </span>
                      </div>
                      <div className="flex items-center justify-center  aspect-ratio-1">
                        <ImageCarousel
                          images={[
                            { src: "/images/case1/onboard_1_2.svg", alt: "Pantalla 1" },
                            { src: "/images/case1/onboard_2_2.svg", alt: "Pantalla 2" },
                          ]}
                        />


                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                          {t('final-solution')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('final-solution-desc')}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          {t('to-review')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('to-review-desc')}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiempo – Iteraciones (Figma section) */}
            <div className="mt-10 rounded-3xl  px-6 py-10 text-foreground dark:bg-card">
              {/* Header */}
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h4 className="text-2xl font-bold text-primary">{t('insight-time')}</h4>
              </div>
              <p className="mt-4 max-w-6xl text-sm text-foreground md:text-base">
                {t('time-iteration-desc')}
              </p>

              {/* Screens row */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {/* Pantalla 1 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('stratey-creation')}</h1>
                  <div className="rounded-2xl border bg-muted p-px">
                    <div className="flex items-center r gap-2 border--700 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/create_strategy_1.png"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {t('strategy-creation-desc')}
                  </p>
                </div>

                {/* Pantalla 2 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('content-review')}</h1>
                  <div className="rounded-2xl border bg-muted p-px">
                    <div className="flex items-center gap-2 border-b  px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/modal_detail_1.png"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {t('content-review-desc')}
                  </p>
                </div>

                {/* Pantalla 3 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">{t('calendar-title')}</h1>
                  <div className="rounded-2xl border bg-muted p-px">
                    <div className="flex items-center gap-2 border-b  px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center h-[210px] overflow-hidden">
                      <ImageZoom>
                        <Image
                          src="/images/case1/calendar_table_1.png"
                          alt="Pantalla 2"
                          width={1000}
                          height={1000}
                          className="rounded-bl-2xl rounded-br-2xl object-cover"
                        />
                      </ImageZoom>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {t('calendar-desc')}

                  </p>
                </div>
              </div>

              {/* Hallazgo */}
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-6 py-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#bb4d00]">
                  {t('findings')}
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground">
                  {t('findings-desc')}


                </p>
                <ul className="list-disc list-inside">
                  <li>{t('findings-time-1')}</li>
                  <li>{t('findings-time-2')}</li>
                  <li>{t('findings-time-3')}</li>
                </ul>
              </div>

              {/* Iteraciones */}
              <div className="mt-10 space-y-12">

                {/* Iteración 1 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>{t('iteration')} 1</span>
                  </div>
                  <div className="mt-4 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border bg-muted p-px">
                      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                        <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                        <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                        <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                          v2 — Final
                        </span>
                      </div>
                      <div className="flex items-center justify-center aspect-ratio-1">
                        <ImageCarousel
                          images={[
                            { src: "/images/case1/new_strategy_1.png", alt: "Pantalla 1" },
                            { src: "/images/case1/review_generation_1.png", alt: "Pantalla 2" },
                            { src: "/images/case1/calendar_table_1.png", alt: "Pantalla 3" }
                          ]}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                          {t('solution-proposal')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('solution-proposal-time-desc')}
                        </p>
                        <ul className="list-disc list-inside">
                          <li>{t('solution-proposal-time-1')}</li>
                          <li>{t('solution-proposal-time-2')}</li>
                          <li>{t('solution-proposal-time-3')}</li>
                        </ul>


                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          {t('to-review')}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          {t('to-review-time')}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>



            <h3 className="my-12 text-2xl font-bold text-black dark:text-white">{t('prototipo-final')}</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.figma.com/proto/kRm6R7H7NojW4t6yBhXeC1/TokinAi?node-id=3941-17896&p=f&t=1RbZBHKhq3sUqgcm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3941%3A17896" target="_blank" className="bg-primary text-white px-4 py-2 rounded-md mr-4 w-full md:w-auto">🖥️ View Prototype Web</a>
              <a href="https://www.figma.com/proto/kRm6R7H7NojW4t6yBhXeC1/TokinAi?node-id=7200-32003&p=f&t=40mXqEGLx8CIKq32-1&scaling=scale-down&content-scaling=fixed&page-id=6372%3A22434&starting-point-node-id=7200%3A32003&show-proto-sidebar=1" target="_blank" className="bg-primary text-white px-4 py-2 rounded-md w-full md:w-auto">📱 View Prototype Mobile</a>
            </div>
          </div>
        </div>

      </section>

      {/* Testing Section */}
      <TitleLine numero={4} titulo={"Testing"} />
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('testing-desc')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-8">
              <li className="ml-4"> <b>{t('pruebas-beta')}:</b> {t('pruebas-beta-desc')}</li>
              <li className="ml-4"> <b>{t('pruebas-a-b')}</b> {t('pruebas-a-b-desc')}
              </li>

            </ul>


            <div className="grid gap-6 md:grid-cols-2">
              {/* What Worked */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-green-600">
                  <Check />
                  <h3 className="text-xl font-semibold  dark:text-white">{t('what-work')}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>{t('content-fast')}:</b> {t('content-fast-desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>{t('automatic-posted')}:</b>{t('automatic-posted-desc')}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Needs Improvement */}
              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex items-center gap-2 text-amber-400">
                  <IterationCcw />
                  <h3 className="text-xl font-semibold  dark:text-white">{t('to-improve')}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <IterationCcw size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>{t('init-social-networks')}:</b>{t('init-social-networks-desc')}
                    </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <TitleLine numero={5} titulo={t('learnings')} />
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  1
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>{t('learnings-1')}</b> {t('learnings-1-desc')}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  2
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>{t('learnings-2')}:</b> {t('learnings-2-desc')}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  3
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>{t('learnings-3')} </b> {t('learnings-3-desc')}                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  4
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>{t('learnings-4')}</b> {t('learnings-4-desc')}                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 md:text-6xl text-md font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;{t('more-projects')}/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">{t('more-projects')}</h2>
          </div>
        </div>
        <div className="flex gap-16 flex-col md:flex-row w-full">
          <CardHorizontalDemo project={projects[1]} index="2" />
          <CardHorizontalDemo project={projects[2]} index="3" />
        </div>
      </section>
    </div>
  );
}
