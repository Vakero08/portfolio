import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { projects } from "@/resources/content";
import { Check, Info, Scan, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SECTION_BLUE = "text-blue-600 dark:text-blue-400";

export default function ScanAudienceCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-neutral-950 mt-[84px]">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          Caso de estudio: Rediseño Parcial
        </div>
        <div className="flex flex-rows gap-4">
          <div className="flex-1">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
              Scan Audience
            </h1>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
                Scan Audience es una herramienta avanzada diseñada para evaluar el rendimiento de su marca y realizar comparaciones con otras marcas en el mercado.
              </p>
              <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
                La plataforma presentaba fricción en puntos importantes, no comunicaban claramente el valor del producto ni guiaban al usuario hacia las acciones principales.
              </p>

            </div>
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
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Rol</h3>
            <p className="text-base font-medium text-black dark:text-white">Lead UI/UX Designer</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Investigación, diseño, testing</p>
          </div>
          <div className="border p-4 rounded-md bg-card">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Equipo</h3>
            <p className="text-base font-medium text-black dark:text-white">5 personas</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">1 diseñador, 3 Developers, 1 PM</p>
          </div>
          <div className="border p-4 rounded-md bg-card">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Duración</h3>
            <p className="text-base font-medium text-black dark:text-white">6 meses</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Octubre 2025 - Enero 2026</p>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Problemas</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            A partir de feedback interno y observación de uso, se detectaron los siguientes problemas:
          </p>
          <ul className="mb-6 list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>El login no comunicaba claramente el propósito de la plataforma</li>
            <li>El Home no presentaba información de utilidad</li>
            <li>Los usuarios tardaban en identificar la acción principal</li>
            <li>Existía poca jerarquía visual y sobrecarga cognitiva</li>
          </ul>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Estos factores afectaban la experiencia del usuario y la adopción del producto.
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Objetivos</h2>
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
                <h3 className="text-xl font-bold text-black dark:text-white">Objetivos UX</h3>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
                <li>Rediseño pantallas principales</li>
                <li>Reducir y agrupar información</li>
                <li>Diseñar una experiencia consistente</li>
                <li>Actualizar UI en general</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03AADD] text-white dark:bg-blue-500">
                  <span className="text-lg font-bold">$</span>
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white">Objetivos de negocio</h3>
              </div>
              <ul className="list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
                <li>Captar nuevos clientes y aumentar el reconocimiento de marca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investigación */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Investigación</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se realizó una investigación ligera, enfocada únicamente en las pantallas a rediseñar:
          </p>
          <ul className="list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>Análisis heurístico de usabilidad</li>
            <li>Análisis de la competencia</li>
            <li>Encuestas a usuarios activos.</li>
            <li>Investigación de navegación de usuarios usando herramientas como Clarity y Posthog</li>
          </ul>
        </div>
      </section>


      {/* Encuestas a usuarios */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Encuestas a usuarios</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">Muestra: 50 participantes · Febrero 2026</p>
          </div>

          {/* Perfil del usuario + CSAT */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Perfil */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">Perfil del usuario</h4>
              <div className="space-y-3">
                {[
                  { rol: "Social Media Managers", pct: 48 },
                  { rol: "Empresas/Negocios", pct: 30 },
                  { rol: "Analistas de Datos", pct: 22 },
                ].map(({ rol, pct }) => (
                  <div key={rol}>
                    <div className="mb-1 flex justify-between text-sm text-neutral-700 dark:text-neutral-300">
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
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">Satisfacción general (CSAT)</h4>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-5xl font-bold text-[#03AADD]">62%</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">"Satisfecho" o "Muy Satisfecho"</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-amber-500">28%</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Neutros</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-neutral-500">10%</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Insatisfechos</p>
                </div>
              </div>
              <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div className="flex h-full">
                  <div className="h-full bg-[#03AADD]" style={{ width: "62%" }} />
                  <div className="h-full bg-amber-400" style={{ width: "28%" }} />
                  <div className="h-full bg-neutral-300 dark:bg-neutral-600" style={{ width: "10%" }} />
                </div>
              </div>
              <div className="mt-2 flex gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-[#03AADD]" />Satisfecho</span>
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-amber-400" />Neutral</span>
                <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />Insatisfecho</span>
              </div>
            </div>
          </div>

          {/* Funcionalidades más usadas + Calificación de atributos */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Funcionalidades */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">Funcionalidad más utilizada</h4>
              <div className="space-y-3">
                {[
                  { label: "Comparativa directa con competidores", pct: 42 },
                  { label: "Análisis de sentimiento publicaciones/comentarios", pct: 28 },
                  { label: "Reportes automatizados", pct: 20 },
                  { label: "Descarga de datos", pct: 10 },
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
              <h4 className="mb-4 text-base font-semibold text-black dark:text-white">Calificación de atributos (escala 1–5)</h4>
              <div className="space-y-4">
                {[
                  { label: "Utilidad de los datos", score: 4.5, critical: false },
                  { label: "Claridad visual de las gráficas", score: 3.3, critical: true },
                  { label: "Facilidad de uso", score: 3.2, critical: true },
                  { label: "Generación de reportes", score: 2.9, critical: true },
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
              <p className="mt-4 text-xs text-red-500 dark:text-red-400">● Punto crítico a resolver</p>
            </div>
          </div>

          {/* Voz del usuario */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-black dark:text-white">Voz del usuario</h4>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  quote: "Me encanta la profundidad de los datos, pero a veces me pierdo entre tantas pestañas e información. Hay demasiada información y no sé por dónde empezar.",
                  user: "User #12",
                  role: "Social Media Manager",
                },
                {
                  quote: "La información es muy valiosa, pero la interfaz se ve muy saturada de colores y desordenada. Difícil lectura.",
                  user: "User #34",
                  role: "Consultor Freelance",
                },
                {
                  quote: "Me gustaría poder elaborar mis propios reportes con la información que necesito. Además descargar los reportes en diferentes formatos, no solo en PDF.",
                  user: "User #07",
                  role: "Analista de Datos",
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
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">User Journey Map - Creación de espacios</h3>
          <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400"><b>Persona: </b> Valeria Martínez · Social Media Manager</p>
          <p className="mb-10 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <b>Escenario:</b>  Valeria necesita crear un espacio para comparar el rendimiento de su marca contra 3 competidores clave para presentarlo en una reunión de estrategia en 20 minutos.
          </p>

          {/* Journey table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="w-28 border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:border-neutral-700 dark:text-neutral-400" />
                  {[
                    { fase: "1. Descubrimiento", color: "text-emerald-600 dark:text-emerald-400" },
                    { fase: "2. Crear espacio", color: "text-amber-600 dark:text-amber-400" },
                    { fase: "3. Agregar páginas", color: "text-amber-600 dark:text-amber-400" },
                    { fase: "4. Análisis", color: "text-orange-600 dark:text-orange-400" },
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
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Acción</td>
                  {[
                    "Entra a la plataforma y busca la sección de \"Espacios\".",
                    "Debe seleccionar de las páginas que ha ingresado, si no hay ninguna debe ingresar páginas. Esto le redirige a la sección de \"Páginas\" Saliendo de la creación de espacios ",
                    "Agrega las páginas que requiere para su análisis y vuelve a la creación de espacios.",
                    "Da un primer vistazo al tablero de análisis.",
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 leading-relaxed text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Pensamiento */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Pensamiento</td>
                  {[
                    "\"Espero que sea una comparación rápida y sencilla.\"",
                    "\"¿Por qué no puedo agregar páginas desde la creación de espacios?\"",
                    "\"¿Cómo debo ingresar las páginas?\"",
                    "\"¿Qué información me brinda este Tablero? ¿Cómo puedo comparar con competidores?\"",
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 text-xs italic leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Emoción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Emoción</td>
                  {[
                    { emoji: "🙂", label: "Neutral / Expectante", bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-400" },
                    { emoji: "🤨", label: "Confundida ", bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-400" },
                    { emoji: "😕", label: "Frustrada", bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
                    { emoji: "😨", label: "Abrumada", bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
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
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Punto de dolor</td>
                  {[
                    "No hay un flujo claro para la creación de espacios.",
                    "No es posible agregar páginas desde la creación de espacios. Es necesario salir de la creación de espacios para agregar páginas.",
                    "Poco intuitivo cómo agregar páginas",
                    "El dashboard inicial tiene demasiada información."
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
              <h4 className="text-base font-bold text-black dark:text-white">Oportunidades de diseño</h4>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  phase: "Fase 1 · Descubrimiento",
                  hmw: "¿Cómo podríamos dar una acceso directo a la creación de espacios?",
                  color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
                  tag: "text-emerald-700 dark:text-emerald-400",
                },
                {
                  phase: "Fase 2-3  Crear espacios/ Agregar páginas",
                  hmw: "¿Cómo podríamos simplificar la creación de espacios y el flujo de agregar páginas?",
                  color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
                  tag: "text-orange-700 dark:text-orange-400",
                },
                {
                  phase: "Fase 4 · Análisis",
                  hmw: "¿Cómo podríamos sintetizar la información del dashboard y hacerla más intuitiva?",
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
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">User Journey Map — Flujo de Comparativa</h3>
          <p className="mb-1 text-sm text-neutral-500 dark:text-neutral-400"><b>Persona:</b> Jimmy Alvear · Analista de datos</p>
          <p className="mb-10 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <b>Escenario:</b> Jimmy necesita comparar el rendimiento de su marca contra un competidor específico en el último trimestre.
          </p>

          {/* Journey table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="w-28 border-b border-r border-neutral-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:border-neutral-700 dark:text-neutral-400" />
                  {[
                    { fase: "1. Navegación Inicial", color: "text-amber-600 dark:text-amber-400" },
                    { fase: "2. Configuración", color: "text-orange-600 dark:text-orange-400" },
                    { fase: "3. Ejecución", color: "text-red-600 dark:text-red-400" },
                    { fase: "4. Resultados", color: "text-red-700 dark:text-red-500" },
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
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Acción</td>
                  {[
                    "Busca en las pestañas la opción \"Comparativa\".",
                    "Busca donde seleccionar las páginas y la fecha de inicio y fin.",
                    "Busca el botón \"Aplicar\" para generar la comparativa.",
                    "Analiza la comparativa generada.",
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 leading-relaxed text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Pensamiento */}
                <tr className="bg-neutral-50/60 dark:bg-neutral-900/50">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Pensamiento</td>
                  {[
                    "\"Hay muchas pestañas, ¿dónde está la comparativa?\"",
                    "\"¿Cómo selecciono las páginas y la fecha de inicio y fin? No encuentro el selector de fechas... Ah, está escondido en este dropdown gris.\"",
                    "\"¿Por qué no se aplican los cambios? Ah, tengo que apretar el botón de aplicar.\"",
                    "\"Por fin... pero tuve que repetir el proceso dos veces para la segunda columna.\"",
                  ].map((text, i) => (
                    <td key={i} className="border-r border-neutral-100 px-4 py-4 text-xs italic leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                      {text}
                    </td>
                  ))}
                </tr>
                {/* Emoción */}
                <tr className="bg-white dark:bg-neutral-900">
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Emoción</td>
                  {[
                    { emoji: "🤨", label: "Neutral", bg: "bg-gray-50 dark:bg-gray-950/40", text: "text-gray-700 dark:text-gray-400" },
                    { emoji: "😫", label: "Agobiada", bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-400" },
                    { emoji: "🤯", label: "Perdida", bg: "bg-red-50 dark:bg-red-950/40", text: "text-red-700 dark:text-red-400" },
                    { emoji: "😤", label: "Agotada", bg: "bg-red-100 dark:bg-red-950/60", text: "text-red-800 dark:text-red-500" },
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
                  <td className="border-r border-neutral-100 px-4 py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">Punto de dolor</td>
                  {[
                    "Demasiada información: hay demasiadas pestañas en el tablero",
                    "Accesibilidad pobre: los selectores de página y fecha parecen texto plano, no campos clickeables.",
                    "Jerarquía visual nula: el botón \"Aplicar\" compite con otros 5 colores brillantes.",
                    "Sin bulk action: tiene que configurar columna por columna; no es intuitivo.",
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
              <h4 className="text-base font-bold text-black dark:text-white">Oportunidades de diseño</h4>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  phase: "Fase 2 · Configuración",
                  hmw: "¿Cómo podríamos simplificar la configuración de selección de páginas y fechas?",
                  color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
                  tag: "text-emerald-700 dark:text-emerald-400",
                },
                {
                  phase: "Fase 3 · Ejecución",
                  hmw: "¿Cómo podríamos destacar el botón de 'Aplicar' para que sea más intuitivo?",
                  color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30",
                  tag: "text-orange-700 dark:text-orange-400",
                },
                {
                  phase: "Fase 4 · Resultados",
                  hmw: "¿Cómo podríamos sintetizar la información del la comparativa y hacerla más intuitiva?",
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
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Análisis heurístico</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se realizó un análisis heurístico de la plataforma para identificar ciertos problemas de usabilidad.
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
            Se identificaron los siguientes problemas de usabilidad en la plataforma:
          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">Home</h1>
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
              <h1 className=" font-bold text-foreground">Añadir páginas</h1>
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
              <h1 className=" font-bold text-foreground">Crear espacios</h1>
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
              <h1 className=" font-bold text-foreground">Tablero</h1>
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
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Diseño</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-4">
            Se trabajo en el rediseño de la plataforma, aplicando los aprendizajes obtenidos del research. Las principales mejoras fueron:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Pantalla Inicio</li>
            <li>Pantalla Añadir páginas</li>
            <li>Pantalla Crear espacios</li>
            <li>Pantalla Tablero/Comparativa</li>
          </ul>

          {/* pantalla inicio */}
          <div className="bg-card p-8 rounded-md border">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Pantalla Inicio</h3>

            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Home
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
                  Se agregó dos secciones nuevas en la pantalla de inicio, para que el usuario pueda tener un acceso directo a opciones que antes no tenia.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Funcionalidad:</b> La pantalla de inicio pasoo de ser una pantalla sin funcionalidad a una pantalla con accesos rápidos a las funcionalidades de la plataforma.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Acceso directo a espacios:</b> Ahora el usuario puede ver sus espacios en la pantalla de inicio, y puede acceder a ellos directamente.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Acceso directo a añadir páginas:</b> El usuario puede ver/añdir páginas de manera rápida.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Add pages */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Añadir páginas</h3>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Añadir páginas
                  </span>
                </div>
                <div className="flex items-center justify-center  aspect-ratio-1">
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
                  Se rediseño la pantalla de añadir páginas, mejorando la usabilidad y la experiencia del usuario.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Input de agregar páginas:</b> Se le dió más prominencia al input de agregar páginas, para que el usuario pueda encontrarlo más fácilmente.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Páginas agregadas:</b> Ahora el usuario puede ver las páginas que tiene agregadas e una manera más clara y organizada.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Ayudas:</b> Se agregaron ayudas visuales, hints, tooltips y descripciones, para que el usuario pueda entender mejor cada sección.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Creación de espacios */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Creación de espacios</h3>
            <p className="text-sm leading-relaxed text-foreground">
              La creación de espacios era un proceso que requería de varios pasos, y que no era muy claro para el usuario. Primero el usuario tenia que ingresar páginas y en otro processo crear espacio  seleccionando las páginas que quiere monitorear.
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Creación de espacios
                  </span>
                </div>
                <div className="flex items-start justify-center h-[410] overflow-hidden">
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
                <h3 className="text-xl font-bold text-black dark:text-white">Creación de espacios</h3>
                <p>
                  Ahora puede crear espacio y agregar páginas en un solo proceso, haciendo el flujo más simple y claro para el usuario.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Agregar páginas:</b> Ahora el usuario puede agregar y seleccionar páginas mientras crea el espacio, haciendo el flujo más simple y claro para el usuario.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Páginas seleccionadas:</b> Visualizar de manera clara las páginas que se han seleccionado para el espacio.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Usabilidad:</b> Se mejoró la usabilidad del formulario de creación de espacios, haciendo que el usuario pueda entender mejor cada sección.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Tablero */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Tablero/Comparativa</h3>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Tablero/Comparativa
                  </span>
                </div>
                <div className="flex items-start justify-center overflow-hidden">
                  <ImageCarousel images={[{ src: "/images/case3/dash-new.svg", alt: "Dashboard nuevo" }, { src: "/images/case3/comparative-new.svg", alt: "Comparativa" }]} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black dark:text-white">Creación de espacios</h3>
                <p>
                  Se rediseño el tablero y la comparativa, estandarizando la información, mejorando la jerarquía de información, manteniendo una experiencia consistente.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Jerarquía de información:</b> Se mejoró la jerarquía de información, haciendo que el usuario pueda entender mejor cada sección.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Menos pestañas:</b> Se redujo el número de pestañas, haciendo que el usuario pueda entender mejor cada sección.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b> Comparativa mejorada:</b> Se mejoró la comparativa, haciendo que el usuario pueda compararse con otros usuarios de manera más clara y eficiente.
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
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl text-[#03AADD]`}>Resultados e impacto</h2>
          <ul className="space-y-4">
            {[
              "Mejora en la comprensión inicial de la plataforma",
              "Reducción del tiempo que los usuarios tardan en identificar acciones clave",
              "Jerarquía visual consistente",
              "Feedback positivo por parte de usuarios internos y stakeholders",
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
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Aprendizajes</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Flujo ordenado hace la diferencia:</strong>Mantener un orden claro, con jerarquía visual y una UI clara. Mejora la primera impresión y la adopción
                de la plataforma.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Aplicar heurísticas clave: </strong> La validación y aplicación de heurísticas puede ser el punto de partida para mejorar y homologar el diseño. Pueden ser clave al momento de diseñar para saber como queremos comunicar nuestros diseños.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Jerarquía de información:</strong> La jerarquía de información es clave para que el usuario pueda entender mejor cada sección. Mantener colores, iconos  , tamaños, tipografías, etc. consistentes ayudan a comunicar la información de manera clara y eficiente.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 text-6xl font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;Más proyectos/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">Más proyectos</h2>
          </div>
        </div>
        <div className="flex gap-16">
          <CardHorizontalDemo project={projects[0]} index="1" />
          <CardHorizontalDemo project={projects[1]} index="2" />
        </div>
      </section>


    </div>
  );
}
