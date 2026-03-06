import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { TitleLine } from "@/components/TitleLine";
import { projects } from "@/resources/content";
import { ArrowUp, Check, Info, LoaderPinwheel, Scan, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SocialAlertCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white  dark:bg-neutral-950 mt-[84px]">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          Caso de estudio: Rediseño de una aplicación Web
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
          Social Alert
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300 mb-6">
              Social Alert es una herramienta de escucha y monitoreo de redes sociales, para gestión y alerta temprana
              de crisis. Identificando comentarios, palabras y patrones negativos o positivos para así prevenir crisis
              o actuar a tiempo.
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
              El proyecto requiere un rediseño completo de la aplicación web, para estar alineado a los nuevos objetivos de negocio.
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
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Julio - Septiembre 2025</p>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={1} titulo={"Problema"} />
          <p className="my-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            La Plataforma Social Alert, presentaba diversos problemas de usabilidad que afectaban directamente la experiencia
            del usuario y la eficiencia del producto.
          </p>
          <ul className="mb-4 space-y-2 pl-6">
            {[
              "Flujos extensos y poco intuitivos.",
              "Usuarios no encontraban de manera clara donde estaba la información.",
              "Excesiva carga cognitiva.",
              "Interfaz visualmente desactualizada.",
              "Poca agilidad y fiabilidad de la plataforma al usuario.",
              "Poca claridad de jerarquía de información.",
              "Competencia con herramientas más modernas y eficientes.",
            ].map((item, i) => (
              <li key={i} className="relative text-neutral-700 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-500 dark:text-neutral-300 before:dark:bg-neutral-400">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Estos problemas impactaban negativamente en la satisfacción del usuario y en el valor efectivo de la plataforma.
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={1} titulo={"Objetivos"} />
          <div className="grid gap-12 md:grid-cols-2 my-8">
            <div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Objetivos UX</h3>
              <ul className="space-y-3">
                {[
                  "Mejorar la usabilidad general del flujo propuesto.",
                  "Reducir errores y puntos de fricción.",
                  "Diseñar una experiencia consistente entre web y mobile.",
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
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Objetivos de negocio</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">Incrementar ventas del producto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 dark:text-neutral-300">Masificar el uso de la plataforma.</p>
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
            Para entender mejor a los usuarios y el contexto del producto, se realizaron las siguientes actividades:
          </p>
          <ul className="space-y-2 pl-6">
            {[
              "Benchmark de plataformas similares.",
              "Encuestas a usuarios activos.",
              "Investigación de navegación de usuarios usando herramientas como Clarity y Posthog",
              "Análisis heurístico de la plataforma."
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
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Encuestas a usuarios</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se encuestó tanto a usuarios activos como al equipo interno. La información recabada de este proceso fue la siguiente:
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
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Benchmark de plataformas similares</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se analizó las siguientes plataformas que realizan monitorio o listening de redes sociales para descubrir oportunidades de mejora y diferenciadores
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
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Análisis heurístico</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se realizó un análisis heurístico de la plataforma para identificar ciertos problemas de usabilidad.
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
            Se identificaron los siguientes problemas de usabilidad en la plataforma:
          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">Creación de consultas</h1>
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
              <h1 className=" font-bold text-foreground">Tablero principal</h1>
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
              <h1 className=" font-bold text-foreground">Configuración de alertas</h1>
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
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Mapas de calor</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se propuso integrar herramientas de seguimiento de usuarios como Clarity, posthog. Para poder entender mejor el comportamiento de los usuarios en la plataforma y así identificar problemas de usabilidad, mapas de calor, donde se quedan más tiempo, etc.

          </p>
          {/* Screens row */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Pantalla 1 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">Mapa de calor - Creación de consultas</h1>
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
                Los datos muestran que los usuarios pasan mucho tiempo en la creación de consultas, lo que indica que tienen problemas para crear consultas.
              </p>

            </div>

            {/* Pantalla 2 */}
            <div className="flex flex-col gap-3">
              <h1 className=" font-bold text-foreground">Mapa de calor - Tablero principal</h1>
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
                Aquí se observa que los usuarios usan bastante el area de busqueda de consultas, y la primera (En vivo) y segunda pestaña (Qué) en el tablero, las otras pestañas son poco o nada usadas.
              </p>

            </div>


          </div>
        </div>
      </section>



      {/* Insights encontrados */}
      <section className="px-8 pt-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">Insights encontrados</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Con la información recopilada de las encuestas y el benchmark, se pudo identificar los siguientes insights:
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Workflow className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Flujos complejos</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Se econtro fricción en flujos importantes como son:
                <ul className="space-y-2 pl-6">
                  {[
                    "Creación de consultas.",
                    "Configuración de alertas.",
                  ].map((item, i) => (
                    <li key={i} className="relative text-neutral-700 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-500 dark:text-neutral-300 before:dark:bg-neutral-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Simplificar los flujos más importantes. </p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Info className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Demasiada información</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Mucha información regada y repetida en el dashboard principal, lo que dificultaba la lectura y comprensión de la información.
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Agrupar y simplificar la información.</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <Scan className="h-6 w-6 text-[#03AADD]" />
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Problemas de usabilidad</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Existen problemas de usabilidad en la plataforma que dificultan la experiencia del usuario.
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Mejorar la usabilidad de la plataforma corrigiendo los puntos identificados en el análisis heurístico.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diseño */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <TitleLine numero={3} titulo={"Diseño"} />
          <p className="mb-12 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 my-8">
            Se trabajó mejorando los flujos más importantes, como el flujo de creación de consultas, tablero y alertas.</p>
          {/* Creación de consultas */}
          <div className="bg-card p-8 rounded-md border">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Creación de consultas</h3>
            <p className="mb-8">Se rediseñó el flujo de creación de consultas, para que sea más sencillo y rápido para el usuario. Se dividio el flujo en 2 pasos.</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Paso1
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
                <h3 className="text-xl font-bold text-black dark:text-white">Input de consultas en lenguaje natural</h3>
                <p className="text-sm leading-relaxed text-foreground">
                  Para facilitar el proceso de creación de consultas, se incluyó un input de consultas, para que el usuario pueda crear consultas en lenguaje natural y por detrás se traduzca a consultas complejas(AND/OR).
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Complejidad de entender el AND/OR:</b> Al tener un input de consultas en lenguaje natural, el usuario no necesita entender el AND/OR, solo necesita escribir lo que quiere y el sistema se encarga de traducirlo a consultas complejas.
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
                    Paso2
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
                  <h3 className="text-xl font-bold text-black dark:text-white">Visualización de consulta construida</h3>
                  <p className="text-sm leading-relaxed text-foreground">
                    En esta sección el usuario puede ver la consulta que se ha construido, en diferentes formatos y puede editarla, aumentar palabras clave o eliminar palabras clave.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Qué problemas soluciona
                  </div>
                  <ul>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Visualización bloques (AND/OR) amigable</b> Tomando en cuenta las dificultades y problemas que tenían los usuarios con el formato de consulta anterior, se muestra la consulta en diferentes formatos, para que el usuario pueda entender mejor cómo se está construyendo.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Flexibilidad en la edición:</b> El usuario puede editar la consulta, aumentar palabras clave o eliminar palabras clave si lo desea en una misma pantalla, eliminando la necesidad de scrollear.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Ayudas visuales:</b> Se implementaron ayudas visuales, hints y tooltips para que el usuario pueda entender mejor cómo se está construyendo la consulta. Lo que hace cada bloque de la consulta y como se relaciona con las otras partes.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Previsualización de publicacioes:</b>  Ahora aparece una pequeña muestra de las publicaciones que se han encontrado con la consulta actual, para que el usuario pueda ver en tiempo real los resultados de la consulta. Si es lo que esta buscando, puede proceder a ejecutar la consulta completa.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Tablero */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Tablero</h3>
            <p className="mb-8">Para el trablero se optó por reducir la cantidad de información innecesaria y repetitiva y mostrar solo la información relevante, correctamente agrupada para el usuario.</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px h-fit">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Nuevo tablero
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
                <h3 className="text-xl font-bold text-black dark:text-white">Nuevo tablero</h3>
                <p className="text-sm leading-relaxed text-foreground">
                  Se ordenó el tablero para que el usuario pueda ver la información de forma clara y ordenada, con los filtros más usados basado en las métricas obtenidas, ubicados en la parte superior para fácil acceso.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Información desorganizada:</b> El tablero anterior mostraba demasiada información, lo que dificultaba al usuario encontrar lo que necesitaba. Se redujo el número de tabs y se reorganizó la información de forma más clara.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Filtros intuitivos</b> Basado en las observaciones, mapas de calor que reflejaban donde los usuarios pasaban más tiempo, se ubicaron los filtros más usados en la parte superior para fácil acceso.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Mejoró usabilidad:</b> Del análisis de heurísticas se pudo identificar varios puntos de mejora, que se implementaron en el rediseño del tablero. Como jerarquía de la información, estandarización de componentes, iconos, diseño minimalista, etc.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          {/* Creación de alertas */}
          <div className="bg-card p-8 rounded-md border my-16">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Configuración de alertas</h3>
            <p className="mb-8">Se separó el flujo de creación de alertas de la sección de configuración de consultas, para que el usuario pueda configurar la alerta de forma independiente y no mezclar los dos procesos.</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border  bg-muted p-px">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                  <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                  <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                  <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                    Configuración de alertas
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
                <h3 className="text-xl font-bold text-black dark:text-white">Configuración de alertas</h3>

                <div className="flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                    Mejoras
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Separar flujos:</b> Se separó el flujo de creación de alertas de la sección de configuración de consultas, para que el usuario pueda configurar la alerta de forma independiente y no mezclar los dos procesos.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Configuración amigable:</b> Se rediseñó el formulario de configuración de alertas para que sea más amigable y fácil de usar. Se eliminaron los campos que no eran necesarios y se agregaron tooltips para explicar cada campo.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-6 w-6 text-[#03AADD]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <b>Mejoró experiencia de usuario:</b> Se realizaron pruebas con usuarios internos para validar el rediseño del formulario de configuración de alertas. Se obtuvo feedback positivo por parte de los usuarios, quienes indicaron que el formulario era más amigable y fácil de usar.
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
            Antes de la implementación en código, se realizaron instancias de validación:
          </p>
          <ul className="space-y-3">
            {[
              "Pruebas A/B con usuarios internos.",
              "Validación de prototipos interactivos.",
              "Ajustes basados en feedback previo al desarrollo.",
              "Uso de herramientas de testing (Maze).",
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
            El resultado fue una nueva versión del producto con:
          </p>
          <ul className="space-y-3">
            {[
              "Interfaces más tangibles y claras.",
              "Flujos más cortos y entendibles.",
              "Jerarquía visual consecuente.",
              "Diseño consistente y alineado a un sistema visual.",
              "Mejora en la experiencia de usuario.",
              "Reducción de la carga cognitiva.",
              "Información ordendada, agrupada y jerarquizada.",



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
          <TitleLine numero={5} titulo={"Aprendizajes"} />

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Replicar y adaptar:</strong> Algunas plataformas ya habían detectado y corregido muchos de los errores que tenía la nuestra, por lo cuál se replico dichas soluciones, siempre adaptándola a nuestras propias necesidades y objetivos.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Funcionalidad ante todo:</strong> Muchas decisiones de diseño se las tomó basándonos en la información recabada de los usuarios y del equipo, ya que poner cierta información en un lugar determinado era primordial para agilizar su trabajo y navegación en la plataforma
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Involucrar a todos los actores:</strong> Involucrar todos los actores: en las distintas etapas es crucial para validar ideas y diseños, tanto con los stakeholders, como con el equipo de desarrolladores, para mantener una buena comunicación y que no haya problemas en el desarrollo.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 text-md md:text-6xl font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;Más proyectos/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">Más proyectos</h2>
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
