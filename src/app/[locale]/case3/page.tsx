import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { projects } from "@/resources/content";
import { Check, Info, Scan, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
}
export default function ScanAudienceCaseStudy({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations('Case3')
  const t1 = useTranslations('Case1')
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-neutral-950 mt-[84px]">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          {t('tag')}
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
          Scan Audience
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
              {t('desc')}
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
              {t('desc-1')}
            </p>

          </div>
          {/* Right Column - Device Mockups */}
          <div className="flex items-center justify-center flex-1">
            <div className="relative aspect-video ">
              {/* Placeholder for project image */}
              <ImageZoom  >
                <Image
                  width={1000}
                  height={1000}
                  src={projects[2].imagen1}
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
            <p className="text-base font-medium text-black dark:text-white">{t('duration')}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t('duration-desc')}</p>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">{t('problems')}</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('problems-desc')}
          </p>
          <ul className="mb-6 list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>{t('problem-1')}</li>
            <li>{t('problem-2')}</li>
            <li>{t('problem-3')}</li>
            <li>{t('problem-4')}</li>
          </ul>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('problem-desc')}
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">{t('objetives')}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03AADD] text-white dark:bg-blue-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white">{t('objetive-ux')}</h3>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
                <li>{t('objetive-ux-1')}</li>
                <li>{t('objetive-ux-2')}</li>
                <li>{t('objetive-ux-3')}</li>
                <li>{t('objetive-ux-4')}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03AADD] text-white dark:bg-blue-500">
                  <span className="text-lg font-bold">$</span>
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white">{t('objetive-bussines')}</h3>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
                <li>{t('objetive-bussines-1')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investigación */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">{t('research')}</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('research-desc')}
          </p>
          <ul className="list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>{t('research-1')}</li>
            <li>{t('research-2')}</li>
            <li>{t('research-3')}</li>
            <li>{t('research-4')}</li>
          </ul>
        </div>
      </section>


      {/* Encuestas a usuarios */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{t('surveys')}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">{t('surveys-desc')}</p>
          </div>

          {/* Perfil del usuario + CSAT */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Perfil */}
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">{t('user-profile')}</h4>
              <div className="space-y-3">
                {[
                  { rol: t('social-manager'), pct: 48 },
                  { rol: t('bussines'), pct: 30 },
                  { rol: t('data-analitycs'), pct: 22 },
                ].map(({ rol, pct }) => (
                  <div key={rol}>
                    <div className="mb-3 flex justify-between text-sm text-neutral-700 dark:text-neutral-300">
                      <span>{rol}</span>
                      <span className="font-medium text-black dark:text-white">{pct}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <div
                        className="h-full rounded-full bg-[#03AADD]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSAT */}
            <div className=" w-100% rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">{t('satisfaction')}</h4>
              <div className="flex justify-between gap-6 w-full ">
                <div >
                  <p className="text-2xl md:text-5xl font-bold text-[#03AADD]">62%</p>
                  <p className="mt-1 text-sm hidden sm:block text-neutral-500 dark:text-neutral-400">{t('satisfaction-desc')}</p>
                  <p className="mt-1 text-sm sm:hidden block text-neutral-500 dark:text-neutral-400">{t('satisfaction-desc-1')}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-3xl font-bold text-amber-500">28%</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{t('neutro')}</p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-3xl font-bold text-neutral-500">10%</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{t('no-satisfaction')}</p>
                </div>
              </div>
              <div className="mt-5 h-3 w- overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div className="flex h-full">
                  <div className="h-full bg-[#03AADD]" style={{ width: "62%" }} />
                  <div className="h-full bg-amber-400" style={{ width: "28%" }} />
                  <div className="h-full bg-neutral-300 dark:bg-neutral-600" style={{ width: "10%" }} />
                </div>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-[#03AADD]" />{t('satisfaction-desc-1')}</span>
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-amber-400" />{t('neutral')}</span>
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />{t('insatisfecho')}</span>
              </div>
            </div>
          </div>

          {/* Funcionalidades más usadas + Calificación de atributos */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Funcionalidades */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">{t('function-more-used')}</h4>
              <div className="space-y-3">
                {[
                  { label: t('more-used-1'), pct: 42 },
                  { label: t('more-used-2'), pct: 28 },
                  { label: t('more-used-3'), pct: 20 },
                  { label: t('more-used-4'), pct: 10 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-sm text-neutral-700 dark:text-neutral-300">
                      <span>{label}</span>
                      <span className="font-medium text-black dark:text-white">{pct}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <div className="h-full rounded-full bg-[#03AADD]" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atributos */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">{t('attr')}</h4>
              <div className="space-y-4">
                {[
                  { label: t('attr-1'), score: 4.5, critical: false },
                  { label: t('attr-2'), score: 3.3, critical: true },
                  { label: t('attr-3'), score: 3.2, critical: true },
                  { label: t('attr-4'), score: 2.9, critical: true },
                ].map(({ label, score, critical }) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className={`flex items-center gap-1.5 ${critical ? "text-red-600 dark:text-red-400" : "text-neutral-700 dark:text-neutral-300"}`}>
                        {critical && <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />}
                        {label}
                      </span>
                      <span className="font-medium text-black dark:text-white">{score} ⭐</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <div
                        className={`h-full rounded-full ${critical ? "bg-red-400" : "bg-[#03AADD]"}`}
                        style={{ width: `${(score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-red-500 dark:text-red-400">● {t('to-resolve')}</p>
            </div>
          </div>

          {/* Voz del usuario */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-black dark:text-white">{t('user-voice')}</h4>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  quote: t('user-voice-1'),
                  user: "User #12",
                  role: "Social Media Manager",
                },
                {
                  quote: t('user-voice-2'),
                  user: "User #34",
                  role: t('user-voice-2-rol'),
                },
                {
                  quote: t('user-voice-3'),
                  user: "User #07",
                  role: t('user-voice-3-rol'),
                },
              ].map(({ quote, user, role }) => (
                <blockquote
                  key={user}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-900/50"
                >
                  <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <footer className="text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="font-semibold text-black dark:text-white">{user}</span> · {role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* User Journey Map */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{t('user-journey')}</h3>
          <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400"><b>{t('person')}: </b> Valeria Martínez · Social Media Manager</p>
          <p className="mb-10 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <b>{t('scene')}:</b>  {t('scene-desc')}
          </p>

          {/* Journey table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="w-28 border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:border-neutral-700 dark:text-neutral-400" />
                  {[
                    { fase: t('discover'), color: "text-emerald-600 dark:text-emerald-400" },
                    { fase: t('create-space-table'), color: "text-amber-600 dark:text-amber-400" },
                    { fase: t('add-pages-table'), color: "text-amber-600 dark:text-amber-400" },
                    { fase: t('analitycs'), color: "text-orange-600 dark:text-orange-400" },
                  ].map(({ fase, color }) => (
                    <th key={fase} className={`border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider dark:border-neutral-700 ${color}`}>
                      {fase}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {/* Acción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('accion')}</td>
                  {[
                    t('accion-1'),
                    t('action-2'),
                    t('action-3'),
                    t('action-4'),
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 leading-relaxed text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Pensamiento */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('pensamiento')}</td>
                  {[
                    t('pensamiento-1'),
                    t('pensamiento-2'),
                    t('pensamiento-3'),
                    t('pensamiento-4'),
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 text-xs italic leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Emoción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('emotion')}</td>
                  {[
                    { emoji: "🙂", label: t('emotion-1'), bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-400" },
                    { emoji: "🤨", label: t('emotion-2'), bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-400" },
                    { emoji: "😕", label: t('emotion-3'), bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
                    { emoji: "😨", label: t('emotion-4'), bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
                  ].map(({ emoji, label, bg, text }, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 dark:border-neutral-800">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${bg} ${text}`}>
                        <span>{emoji}</span>
                        {label}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Punto de dolor */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('pain-point')}</td>
                  {[
                    t('pain-point-1'),
                    t('pain-point-2'),
                    t('pain-point-3'),
                    t('pain-point-4')
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 dark:border-neutral-800">
                      <span className="flex items-start gap-1.5 text-xs leading-relaxed text-red-600 dark:text-red-400">
                        <span className="mt-0.5 shrink-0">⚠</span>
                        {text}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* HMW Opportunities */}
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <h4 className="text-base font-bold text-black dark:text-white">{t('desing-opportunities')}</h4>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  phase: t('phase-1'),
                  hmw: t('phase-1-hmw'),
                  color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
                  tag: "text-emerald-700 dark:text-emerald-400",
                },
                {
                  phase: t('phase-2'),
                  hmw: t('phase-2-hmw'),
                  color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
                  tag: "text-orange-700 dark:text-orange-400",
                },
                {
                  phase: t('phase-4'),
                  hmw: t('phase-4-hmw'),
                  color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30",
                  tag: "text-red-700 dark:text-red-400",
                },
              ].map(({ phase, hmw, color, tag }) => (
                <div key={phase} className={`rounded-xl border p-5 ${color}`}>
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${tag}`}>{phase}</p>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{hmw}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Map 2 — Flujo Comparativa */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{t('user-journey-comparative')}</h3>
          <p className="mb-1 text-sm text-neutral-500 dark:text-neutral-400"><b>{t('person')}:</b> Jimmy Alvear · {t('data-analitic')}</p>
          <p className="mb-10 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <b>{t('scene')}:</b> {t('scene-desc-1')}
          </p>

          {/* Journey table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="w-28 border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:border-neutral-700 dark:text-neutral-400" />
                  {[
                    { fase: t('column-1'), color: "text-amber-600 dark:text-amber-400" },
                    { fase: t('column-2'), color: "text-orange-600 dark:text-orange-400" },
                    { fase: t('column-3'), color: "text-red-600 dark:text-red-400" },
                    { fase: t('column-4'), color: "text-red-700 dark:text-red-500" },
                  ].map(({ fase, color }) => (
                    <th key={fase} className={`border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider dark:border-neutral-700 ${color}`}>
                      {fase}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {/* Acción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">t('accion')</td>
                  {[
                    t('action-1'),
                    t('action-2-1'),
                    t('action-2-2'),
                    t('action-2-3'),
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 leading-relaxed text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Pensamiento */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('pensamiento')}</td>
                  {[
                    t('pensamiento-1-1'),
                    t('pensamiento-2-2'),
                    t('pensamiento-3-3'),
                    t('pensamiento-4-4'),
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 text-xs italic leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Emoción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('emotion')}</td>
                  {[
                    { emoji: "🤨", label: t('neutral'), bg: "bg-gray-50 dark:bg-gray-950/40", text: "text-gray-700 dark:text-gray-400" },
                    { emoji: "😫", label: t('agobiada'), bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
                    { emoji: "🤯", label: t('perdida'), bg: "bg-red-50 dark:bg-red-950/40", text: "text-red-700 dark:text-red-400" },
                    { emoji: "😤", label: t('agotada'), bg: "bg-red-100 dark:bg-red-950/60", text: "text-red-800 dark:text-red-500" },
                  ].map(({ emoji, label, bg, text }, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 dark:border-neutral-800">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${bg} ${text}`}>
                        <span>{emoji}</span>
                        {label}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Punto de dolor */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{t('pain-point')}</td>
                  {[
                    t('pain-1'),
                    t('pain-2'),
                    t('pain-3'),
                    t('pain-4'),
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 dark:border-neutral-800">
                      <span className="flex items-start gap-1.5 text-xs leading-relaxed text-red-600 dark:text-red-400">
                        <span className="mt-0.5 shrink-0">⚠</span>
                        {text}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* HMW Opportunities */}
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <h4 className="text-base font-bold text-black dark:text-white">{t('desing-opportunities')}</h4>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  phase: t('phase-2-2'),
                  hmw: t('phase-2-2-hmw'),
                  color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
                  tag: "text-emerald-700 dark:text-emerald-400",
                },
                {
                  phase: t('phase-3-3'),
                  hmw: t('phase-3-3-hmw'),
                  color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
                  tag: "text-orange-700 dark:text-orange-400",
                },
                {
                  phase: t('phase-4-4'),
                  hmw: t('phase-4-4-hmw'),
                  color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30",
                  tag: "text-red-700 dark:text-red-400",
                },
              ].map(({ phase, hmw, color, tag }) => (
                <div key={phase} className={`rounded-xl border p-5 ${color}`}>
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${tag}`}>{phase}</p>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{hmw}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Análisis heurístico */}
      <section className=" px-8 py-16 ">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t('heuristic-analisys')}</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('heuristic-analisys-desc')}
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ImageZoom>
              <Image
                src="/images/case3/heuristic_scan.svg"
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
            {t('ui-desc')}
          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('home')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case3/home-old.svg"
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
              <h1 className=" font-bold text-foreground">{t('anadir-paginas')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">

                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case3/add-pages.svg"
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
              <h1 className=" font-bold text-foreground">{t('crear-espacios')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case3/create-space.svg"
                      alt="Pantalla 2"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl w-full h-full object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>
              {/* tablero*/}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">{t('tablero')}</h1>
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b  px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                </div>
                <div className="flex items-center justify-center h-[210px] overflow-hidden bg-background">
                  <ImageZoom>
                    <Image
                      src="/images/case3/tablero.svg"
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

      </section>



      {/* Diseño */}

      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">{t('diseno')}</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-4">
            {t('design-desc')}
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>{t('pantalla-inicio')}</li>
            <li>{t('pantalla-anadir-paginas')}</li>
            <li>{t('pantalla-crear-espacios')}</li>
            <li>{t('pantalla-tablero-comparativa')}</li>
          </ul>

          {/* pantalla inicio */}
          <div className="bg-card p-8 rounded-md border">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('pantalla-inicio')}</h3>

            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('home')}
                  </span>
                </div>
                <div className="flex items-center justify-center  aspect-ratio-1">
                  <ImageZoom>
                    <Image
                      width={1000}
                      height={1000}
                      src={"/images/case3/home-new.svg"}
                      alt="Placeholder image case study"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-4">

                <p className="text-sm leading-relaxed text-foreground">
                  {t('home-desc')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('mejoras')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('funcionalidad')}:</b> {t('funcionalidad-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('spaces')}</b> {t('spaces-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('pages')}</b> {t('pages-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Add pages */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('anadir-paginas')}</h3>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('anadir-paginas')}
                  </span>
                </div>
                <div className="flex items-center justify-center  aspect-video">
                  <ImageZoom>
                    <Image
                      width={1000}
                      height={1000}
                      src={"/images/case3/add-new.svg"}
                      alt="Placeholder image case study"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-foreground">
                  {t('add-pages-desc')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('mejoras')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('input-de-agregar-paginas')}</b> {t('input-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('paginas-agregadas')}:</b> {t('paginas-agregadas-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('help')}</b> {t('help-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Creación de espacios */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">{t('espacios')}</h3>
            <p className="text-sm leading-relaxed text-foreground">
              {t('espacios-desc')}
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px h-auto">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('espacios')}
                  </span>
                </div>
                <div className="flex items-start justify-center overflow-hidden">
                  <ImageZoom>
                    <Image
                      src="/images/case3/create-new.svg"
                      alt="Pantalla 1"
                      width={1000}
                      height={1000}
                      className="rounded-bl-2xl rounded-br-2xl object-cover"
                    />
                  </ImageZoom>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{t('espacios')}</h3>
                <p>
                  {t('espacios-desc-1')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('mejoras')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('agregar-paginas')}</b> {t('agregar-paginas-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('paginas-seleccionadas')}</b> {t('paginas-seleccionadas-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('usabilidad')}</b> {t('usabilidad-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Tablero */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 md:text-2xl text-lg font-bold text-black dark:text-white ">{t('tablero-comparativa')}</h3>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    {t('tablero-comparativa')}
                  </span>
                </div>
                <div className="flex items-start justify-center overflow-hidden">
                  <ImageCarousel images={[{ src: "/images/case3/dash-new.svg", alt: "Dashboard nuevo" }, { src: "/images/case3/comparative-new.svg", alt: "Comparativa" }]} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{t('tablero-comparativa')}</h3>
                <p>
                  {t('tablero-desc')}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    {t('mejoras')}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('jerarquia-de-informacion')}:</b> {t('jerarquia-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('menos-pestanas')}:</b> {t('menos-pestanas-desc')}
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>{t('comparativa-mejorada')}</b> {t('comparativa-mejorada-desc')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resultados e impacto */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl text-[#03AADD]`}>{t('resultados-e-impacto')}</h2>
          <ul className="space-y-4">
            {[
              t('impact-1'),
              t('impact-2'),
              t('impact-3'),
              t('impact-4'),
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 h-6 w-6 shrink-0 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700 dark:text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aprendizajes */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">{t('learnings')}</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('learning-1')}</strong>{t('learning-1-desc')}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('learning-2')} </strong> {t('learning-2-desc')}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">{t('info')}</strong> {t('info-desc')}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 md:text-6xl text-md font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;{t1('more-projects')}/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">{t1('more-projects')}</h2>
          </div>
        </div>
        <div className="flex gap-16 flex-col md:flex-row w-full">
          <CardHorizontalDemo project={projects[0]} index="1" />
          <CardHorizontalDemo project={projects[1]} index="2" />
        </div>
      </section>


    </div>
  );
}
