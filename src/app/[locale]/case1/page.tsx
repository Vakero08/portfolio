import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { projects } from "@/resources/content";
import { Check, Clock, Delete, Dot, HelpCircle, IterationCcw, Repeat, Repeat1, Repeat1Icon, Repeat2, Repeat2Icon, SeparatorHorizontal, Settings, X } from "lucide-react";
import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";
import { TitleLine } from "@/components/TitleLine";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
}
export default function TokinAiCaseStudy({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black mt-[84px]">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16 ">
        <div className="mb-4 w-fit rounded bg-gray-800 px-4 py-2 text-md font-medium text-slate-100 dark:bg-gray-800 dark:text-gray-300">
          Caso de estudio: Creación de una aplicación Web/Móvil
        </div>

        <h1 className="mb-8 text-6xl font-bold text-black dark:text-white">
          TokinAi
        </h1>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Description */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              TokinAi es una aplicación  diseñada para ayudar a emprendedores, creadores de contenido y equipos de marketing a generar contenido visual y textual para redes sociales de manera rápida y eficiente usando IA.            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              El proyecto surgió de la necesidad de democratizar la creación de contenido profesional para pequeñas empresas y creadores independientes que no cuentan con equipos de diseño dedicados.            </p>


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
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Enero - Julio 2025</p>
        </div>
      </div>
      {/* El Problema Section */}
      <TitleLine numero={1} titulo={"Problema"} />

      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold  dark:text-blue-400">Muchos emprendedores enfrentan dificultades para mantener una presencia activa y consistente en redes sociales.</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Los pequeños emprendedores destinan entre 5 y 8 horas semanales a la creación de contenido, tiempo que podría invertirse en actividades estratégicas para el crecimiento de su negocio. Además, el 73% de los usuarios encuestados manifestó sentirse abrumado por la necesidad de producir contenido de calidad de forma constante en múltiples plataformas, principalmente por falta de tiempo, recursos o conocimientos especializados.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Esta situación genera una barrera significativa para la visibilidad digital y el crecimiento sostenido de sus marcas.            </p>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <TitleLine numero={2} titulo={"User Research"} />
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="">

            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Análisis competitivo</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Se examinaron plataformas similares para entender el mercado y las oportunidades de diferenciación.
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
                  Pippit es una plataforma con funciones de creación automática de contenido multimedia impulsada por IA, enfocada en la generación de videos e imágenes para marketing y redes sociales.                </p>

                <div className="mb-6">
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Fortalezas</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">

                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">IA para generación automática de videos e imágenes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">Avatares y narración multilingüe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} color="green" />
                      <span className="text-base text-gray-700 dark:text-gray-300">Plantillas y recursos de marketing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Puntos débiles</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">Falta de contexto de negocio/nicho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">No sugiere frecuencia de publicación para diferentes redes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X size={16} color="orange" />
                      <span className="text-base text-gray-700 dark:text-gray-300">No permite organizar/reutilizar publicaciones</span>
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
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Encuestas</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Para garantizar que nuestro producto satisfacía realmente las necesidades de nuestros usuarios, era esencial realizar entrevistas con emprendedores nuevos y con algún tiempo. Estas opiniones dieron forma a nuestra estrategia, lo que nos permitió crear un producto que aportaba un valor real y abordaba sus puntos débiles específicos.            </p>

            <div className="mb-10 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-card/60">
              <table className="min-w-full divide-y divide-gray-200 text-left text-sm dark:divide-gray-700">
                <thead className="bg-card">
                  <tr>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      Problema identificado
                    </th>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      <span className="hidden sm:inline">Emprendedores encuestados (80)</span>
                      <span className="sm:hidden">Encuestados</span>
                    </th>
                    <th scope="col" className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6 sm:py-3 sm:tracking-wider dark:text-gray-300">
                      %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      Falta de tiempo para publicar
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">69</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">86%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      Falta de conocimiento en marketing digital
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">43</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">53%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      No han usado herramientas de IA para crear contenido
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">46</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">58%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      No tienen página web, ni redes sociales
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">32</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">40%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      Publican de forma inconsistente
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">44</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">55%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      No miden resultados ni métricas
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">67</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">83%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">
                      No saben cómo hacer publicidad (ads)
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">62</td>
                    <td className="px-3 py-3 text-xs text-gray-800 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100">77%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Insights encontrados</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Después de realizar entrevistas a usuarios, investigaciones contextuales, análisis de plataformas similares y analizar los datos recopilados, pude clasificar los conocimientos adquiridos en estas tres categorías:            </p>

            {/* Insights Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <Clock size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Tiempo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  La mayoría de los emprendedores carecen del tiempo para aprender, ejecutar y vitalizar sus cuentas de redes sociales.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <Settings size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Personalización</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Muchos usuarios encuentran que el contenido generado por IA genérico no está personalizado o alineado con la marca.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary/20">
                  <HelpCircle size={22} color="white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Desconocimiento</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Muchos emprendedores saben que tienen un negocio real pero carecen de conocimiento sobre qué, cuándo o cómo publicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">User Personas</h3>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A partir de la investigación, definimos tres perfiles de usuarios que representan el espectro de necesidades de TokinAi.
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Dueño de negocio · 35 años</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              "Sé que necesito publicar más, pero entre atender mi negocio y todo lo demás, simplemente no tengo tiempo."
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Objetivos</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Ganar visibilidad sin invertir horas en redes
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Atraer nuevos clientes con contenido profesional
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Frustraciones</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  No sabe qué publicar ni cuándo
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  Teme verse poco profesional en redes
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Community Manager · 27 años</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              "Manejo varias marcas a la vez y siempre necesito ideas frescas. Es agotador reinventarse cada semana."
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Objetivos</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Generar ideas de contenido para múltiples clientes
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Mantener la voz y consistencia de cada marca
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Frustraciones</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  Agotamiento creativo al gestionar varias cuentas
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  Herramientas genéricas que no respetan el tono de marca
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Emprendedora digital · 24 años</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-2 border-primary pl-3 leading-relaxed">
              "Tengo las ideas, pero necesito ayuda para transformarlas en publicaciones que realmente conecten."
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Objetivos</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Construir audiencia orgánica desde cero
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check size={14} className="mt-0.5 text-green-500 shrink-0" />
                  Monetizar su marca personal con contenido de valor
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Frustraciones</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  No sabe adaptar contenido a distintas plataformas
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <X size={14} className="mt-0.5 text-red-400 shrink-0" />
                  Baja consistencia por falta de estructura
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Design Section */}
      <TitleLine numero={3} titulo={"Diseño"} />
      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Con una mejor comprensión de las necesidades de los usuarios, me sumergí en la creación de wireframes e iteraciones, centrándome en:
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
                <h4 className="text-2xl font-bold text-primary">Personalización de contenido</h4>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-foreground md:text-base">
                Para esta arista, se planteó un onboarding en un flujo progresivo de 3 pasos, la primera vez que el usuario entra para que proporcione datos de su negocio y datos de la competencia. Para asi poder generar contenido personalizado y alineado a la marca.
              </p>

              {/* Screens row */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {/* Pantalla 1 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Identificar la marca</h1>
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
                    <b>Paso 1:</b> En este paso el usuario debía iniciar sesioón con sus redes sociales para poder obtener los datos de su negocio como su Nombre de negocio, seguidores, publicaciones, etc.
                  </p>
                </div>

                {/* Pantalla 2 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Identificar la competencia</h1>
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
                    <b>Paso 2:</b> En este paso el usuario debía ingresar la URL's de sus competencias para que la IA pueda analizar y obtener información de su competencia.
                  </p>
                </div>

                {/* Pantalla 3 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Revisar y editar los datos inferidos</h1>
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
                    <b>Paso 3:</b> En este paso el usuario podía revisar y editar los datos obtenidos de su negocio y de su competencia. Que fueron obtenidos con sus redes sociales y las URL's de sus competencias. Y algunos como el tono de sus publicaciones, etc. Que fueron inferidos por la IA.
                  </p>
                </div>
              </div>

              {/* Hallazgo */}
              <div className="mt-8 flex flex-col  gap-4 md:flex-row md:items-center">
                <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-6 py-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#bb4d00]">
                  Hallazgos
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground">
                  En las pruebas iniciales se detectó los siguientes incovenientes:

                </p>
                <ul className="list-disc list-inside">
                  <li className="text-sm leading-relaxed text-foreground">El flujo de onboarding era demasiado extenso. Los usuarios abandonaban antes de configurar su perfil de negocio, impidiendo que puedan pasar el onboarding por tanto acceder a la funcionalidad principal de la plataforma.</li>
                  <li className="text-sm leading-relaxed text-foreground">Debido a la audiencia objetiva de la plataforma, que son dueños de negocios con poco tiempo y con conocimientos básicos. Muchos no tenían redes sociales, por tanto no se podían obtener los datos de su negocio.</li>
                  <li className="text-sm leading-relaxed text-foreground">Otros usuarios que si contaban con redes sociales, no tenían inisiado sesión con sus redes sociales, por tanto debían buscar o recordad sus credenciales para poder iniciar sesión. Lo cuál era demoroso y muchos no lo hacían.</li>
                  <li className="text-sm leading-relaxed text-foreground">Otros no contaban con el suficiente contenido en sus redes sociales, por tanto la IA no podía obtener los datos suficientes para poder crear una idea de la marca.</li>
                  <li className="text-sm leading-relaxed text-foreground">En la identificación de la competencia, los usuarios no sabían que poner en el campo de URL de la competencia. Les causaba confusión y no sabían que poner.</li>
                </ul>
              </div>

              {/* Iteraciones */}
              <div className="mt-10 space-y-12">
                {/* Iteración 1 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>Iteración 1</span>
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
                          Propuesta de solución
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          Se considero las observaciones de los usuarios y se rediseñó el primer paso del onboarding. Se intento que el usuario ya no inicie sesión con sus redes sociales, si no que ingrese la URL de su negocio o de su competencia. Para asi poder obtener los datos de su negocio y de su competencia.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                          Problemas encontrados
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          Este cambio no fue bien recibido por los usuarios, ya que les causaba confusion el campo de URL de su negocio y el de la competencia. Además volvimos al problema de ser un proceso engorroso y largo.
                          Al tener que buscar la URL de su negocio y el de su competencia, muchos usuarios no lo hacían.                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Iteración 2 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>Iteración 2</span>
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
                          Solución final
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          Se volvió a plantear otra solución, esta vez se opto por inckuir un buscador de páginas, para que el usuario pueda buscar la página de su negocio y agregarla facilmente. Esta solución fue bien recibida por los usuarios, ya que les permitía obtener los datos de su negocio de manera rápida y eficiente. Sin tener que salir de la plataforma para obtener los datos de su negocio.
                          Además se redujo a 2 pasos el onboarding, para que el usuario pueda obtener los datos de su negocio de manera más rápida y la sección de comptidores se agrego como un dato más a revisar inferido por la IA.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          Por revisar
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          A pesar de que esta solución menoró las fricciones y logro que muchos usuario avanzaran en el onboarding, surgió el problema de que algunas páginas no se encontraban el buscador, por lo que los usuarios tenían que ingresar los datos de su negocio de manera manual con el URL. Sin embargo se considero que esta solución era la mejor opción, debido a la tasa de usuario que avanzaban a comparación de los otros métodos.
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
                <h4 className="text-2xl font-bold text-primary">Tiempo</h4>
              </div>
              <p className="mt-4 max-w-6xl text-sm text-foreground md:text-base">
                Para el problema de tiempo, se propuso una solución que permitiera a los usuarios generar contenido de manera rápida y eficiente. Se planteó un sistema de estrategias que le premitan al usuario crear varias publicaciones en un solo proceso.
              </p>

              {/* Screens row */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {/* Pantalla 1 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Creación de estrategia</h1>
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
                    Aquí el usuario puede determinar el objetivo de su estrategia, el tipo de contenido que desea generar y el tono que desea usar.
                    Por defecto se le propone una estrategia con variantes listas para usar.
                  </p>
                </div>

                {/* Pantalla 2 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Revisión de contenido a generar</h1>
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
                    Aquí el usuario puede revisar que contenido se generará (Imagen, video, texto), para que red social se publicará y el valor en creditos que se requiere.Puede modificar si es necesario.
                  </p>
                </div>

                {/* Pantalla 3 */}
                <div className="flex flex-col gap-3">
                  <h1 className=" font-bold text-foreground">Calendario de publicaciones</h1>
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
                    El sistema genera y agenda el contenido y recomienda los mejores horarios por red social. El usuario puede modificar en cualquier momento.

                  </p>
                </div>
              </div>

              {/* Hallazgo */}
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-6 py-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#bb4d00]">
                  Hallazgos
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground">
                  En las pruebas iniciales se detectó lo siguiente:


                </p>
                <ul className="list-disc list-inside">
                  <li>Los usuarios solo editaban el objetivo, no interactuaban con las opciones de edición de contenido</li>
                  <li>La mayoría de usuario aceptaban el contenido propuesto por la IA, por lo que se decidió simplificar el flujo.</li>
                  <li>El modal de revisión de contenido contenía mucha información y era confuso para los usuarios.</li>
                </ul>
              </div>

              {/* Iteraciones */}
              <div className="mt-10 space-y-12">

                {/* Iteración 1 */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-6 w-px bg-slate-200" />
                    <span>Iteración 1</span>
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
                          Propuesta de Solución
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          Se rediseñó el flujo de creación de estrategias de contenido para solventar los hallazgos entontrados:
                        </p>
                        <ul className="list-disc list-inside">
                          <li>Se simplificó el flujo de creación de estrategias de contenido, presentando al usuario un solo input donde podia ingresar el objetivo de la estrategia, que es el campo que más editaba el usuario.</li>
                          <li>Los campos para el tono de contenido, hashtags o fecha de publicación se colocaron con menos jerarquia para no abrumar al usuario.</li>
                          <li>Se eliminó el modal de revisión de contenido, cambiandolo por un resumen de la estrategia de contenido con la información más separada y ordenada.</li>
                        </ul>


                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          Por revisar
                        </span>
                        <p className="text-sm leading-relaxed text-foreground">
                          En esta mejora, aunque el flujo fue más directo, se notó que los usuarios seguían sin interactuar con los campos de personalización de contenido, por lo que se sugierio revisar como mejorar la experiencia de personalización de contenido.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>



            <h3 className="my-12 text-2xl font-bold text-black dark:text-white">Solución final</h3>
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
              Probé el producto en varias etapas del proyecto.            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-8">
              <li className="ml-4"> <b> Pruebas beta:</b> antes de lanzar la aplicación, la probamos con un grupo de emprendedores. Lo cuál nos sirvió para obtener algunos indicadores y donde había puntos de fricción</li>
              <li className="ml-4"> <b>Pruebas A/B:</b> se probaron varios pequeños flujos en la herramienta para medir como interactuaban los usuario con determinado flujo y si era intuitivo para el usuario
              </li>

            </ul>


            <div className="grid gap-6 md:grid-cols-2">
              {/* What Worked */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-green-600">
                  <Check />
                  <h3 className="text-xl font-semibold  dark:text-white">Lo que funcionó</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>Creación rápida de contenido:</b> Los usuarios destacaron la capacidad de generar contenido de manera eficiente como un gran ahorro de tiempo.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>Agendamiento/Publicación automático:</b>El usuario se vió entusiasmado por las recomendaciones de contenido a publicar y horarios para las distintas redes.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Needs Improvement */}
              <div className="rounded-lg border bg-card p-6 shadow-sm ">
                <div className="mb-4 flex items-center gap-2 text-amber-400">
                  <IterationCcw />
                  <h3 className="text-xl font-semibold  dark:text-white">A mejorar</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <IterationCcw size={24} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <b>Inicio de sesión en redes sociales:</b> Muchos usuarios no tenían abierta la cuenta en el navegador. Lo que generaba fricciones en el proceso. Lo cuál generaba que usuarios no pasen de este paso.
                    </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <TitleLine numero={5} titulo={"Aprendizajes"} />
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  1
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>Estudio previo de audiencia:</b> Al hacer las primeras entrevistas, los usuarios que más teníamos, eran de entre 40-65 años. Con pocos conocimientos de temas de marketing, crecimiento de marca, IA,  tecnología en general. Lo cuál me indicaba que las interacciones que para un público familiarizado con tecnología y tendencias, tal vez no funcione tan bien entre este rango de edad.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  2
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>Tiempo VS Teoría:</b> Los tiempos del proyecto estuvieron apretados, lo cuál no permitió realizar todos los procesos que en teoría deberían realizarse en un proyecto de UX/UI, sin embargo se trato de equilibrar el procesos, para qie los entregables cuenten con un diseño centrado en el usuario en cada etapa.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  3
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>Iterar continuamente: </b> Monitorear continuamente el uso de los usuarios, recibir el feedback para mejorar. Ayudó mucho a encontrar en que puntos tenían fricción los usuarios y poder modificar y en ocasiones rediseñar por completo.                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-blue-600 dark:bg-primary dark:text-slate-100">
                  4
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <b>Involucrar todos los actores:</b> en las distintas etapas es crucial para validar ideas y diseños, tanto con los stakeholders, como con el equipo de desarrolladores, para mantener una comunicación, misma sintonía y que no se retrase por falta de comunicación                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="text-center mb-16">
          <div className="relative">
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 md:text-6xl text-md font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;Más proyectos/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">Más proyectos</h2>
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
