import CardHorizontalDemo from "@/components/CardMoreProject";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/resources/content";
import { Check, Clock, Delete, Dot, HelpCircle, IterationCcw, Repeat, Repeat1, Repeat1Icon, Repeat2, Repeat2Icon, SeparatorHorizontal, Settings, X } from "lucide-react";
import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";

export function TitleLine({ numero, titulo }: { numero: number, titulo: String }) {
  return <div className="flex items-center gap-4 max-w-6xl w-full mx-auto mb-8 mt-16">
    <span className="text-primary">0{numero}</span><Separator className="bg-slate-200 dark:bg-slate-700" /><span className="text-primary font-bold text-4xl">{titulo}</span>
  </div>
}

export default function TokinAiCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black mt-[84px]">

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
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Enero - Julio 2025</p>
        </div>
      </div>
      {/* El Problema Section */}
      <TitleLine numero={1} titulo={"Problema"} />

      <section className="mx-auto w-full max-w-6xl px-8 py-8">
        <div className="flex gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold  dark:text-blue-400">Muchos emprendedores y creadores de contenido enfrentan dificultades para mantener una presencia activa y consistente en redes sociales.</h2>
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
                    <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                      Problema identificado
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                      Emprendedores afectados
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                      Porcentaje
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      Falta de tiempo para publicar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">89</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">74%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      Falta de conocimiento en marketing digital
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">83</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">69%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No saben qué contenido publicar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">76</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">63%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No tienen página web
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">58</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">48%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No tienen estrategia clara de contenido
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">71</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">59%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      Publican de forma inconsistente
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">92</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">77%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No tienen redes sociales activas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">41</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">34%</td>
                  </tr>
                  <tr className="bg-accent/60">
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No miden resultados ni métricas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">67</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">56%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                      No saben cómo hacer publicidad (ads)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">79</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">66%</td>
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
                    <div className="flex items-center justify-center  aspect-ratio-1">
                      <Image
                        src="/images/case1/create_strategy_1.png"
                        alt="Pantalla 2"
                        width={1000}
                        height={1000}
                        className="rounded-bl-2xl rounded-br-2xl"
                      />
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
                    <div className="flex items-center justify-center  aspect-ratio-1">
                      <Image
                        src="/images/case1/modal_detail_1.png"
                        alt="Pantalla 2"
                        width={1000}
                        height={1000}
                        className="rounded-bl-2xl rounded-br-2xl"
                      />
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
                    <div className="flex items-center justify-center aspect-ratio-1">
                      <Image
                        src="/images/case1/calendar_table_1.png"
                        alt="Pantalla 2"
                        width={1000}
                        height={1000}
                        className="rounded-bl-2xl rounded-br-2xl"
                      />
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
                  <ul className="list-disc list-inside">
                    <li>Los usuarios solo editaban el objetivo, no interactuaban con las opciones de edición de contenido</li>
                    <li>La mayoría de usuario aceptaban el contenido propuesto por la IA, por lo que se decidió simplificar el flujo.</li>
                    <li>El modal de revisión de contenido contenía mucha información y era confuso para los usuarios.</li>
                  </ul>

                </p>
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
                          <ul className="list-disc list-inside">
                            <li>Se simplificó el flujo de creación de estrategias de contenido, presentando al usuario un solo input donde podia ingresar el objetivo de la estrategia, que es el campo que más editaba el usuario.</li>
                            <li>Los campos para el tono de contenido, hashtags o fecha de publicación se colocaron con menos jerarquia para no abrumar al usuario.</li>
                            <li>Se eliminó el modal de revisión de contenido, cambiandolo por un resumen de la estrategia de contenido con la información más separada y ordenada.</li>
                          </ul>

                        </p>
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

            {/* Personalizacion – Iteraciones (Figma section) */}
            <div className="mt-10 rounded-3xl  px-6 py-10 text-foreground dark:bg-card">
              {/* Header */}
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h4 className="text-2xl font-bold text-primary">Personalización de contenido</h4>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-foreground md:text-base">
                A partir de los datos recopilados, identificamos problemas clave y propusimos soluciones iterativas para mejorar la experiencia.
              </p>

              {/* Screens row */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {/* Pantalla 1 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-px">
                    <div className="flex items-center gap-2 border-b border-slate-700 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center py-24">
                      <p className="text-xs text-slate-500">[ Pantalla 1 ]</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Pantalla de inicio donde el usuario selecciona su tipo de negocio y nicho para que la IA
                    contextualice el contenido desde el primer momento.
                  </p>
                </div>

                {/* Pantalla 2 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-px">
                    <div className="flex items-center gap-2 border-b border-slate-700 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center py-24">
                      <p className="text-xs text-slate-500">[ Pantalla 2 ]</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Generador de contenido rápido: el usuario describe su producto en una frase y la IA propone
                    tres variantes de publicación listas para usar.
                  </p>
                </div>

                {/* Pantalla 3 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-px">
                    <div className="flex items-center gap-2 border-b border-slate-700 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                      <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                      <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                    </div>
                    <div className="flex items-center justify-center py-24">
                      <p className="text-xs text-slate-500">[ Pantalla 3 ]</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Calendario de publicaciones automático: el sistema recomienda los mejores horarios por red
                    social y agenda el contenido aprobado sin intervención manual.
                  </p>
                </div>
              </div>

              {/* Hallazgo */}
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-6 py-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#bb4d00]">
                  Hallazgo
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground">
                  En las pruebas iniciales se detectó que el flujo de onboarding era demasiado extenso. Los
                  usuarios abandonaban antes de configurar su perfil de negocio, impidiendo que la IA
                  personalizara el contenido correctamente.
                </p>
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
                    <div className="rounded-2xl border border-cyan-500/30 bg-slate-800/60 p-px">
                      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                        <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                        <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                        <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                          v2
                        </span>
                      </div>
                      <div className="flex items-center justify-center py-20">
                        <p className="text-xs text-slate-500">[ Pantalla rediseñada → v2 ]</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                          Solución propuesta
                        </span>
                        <p className="text-sm leading-relaxed text-slate-200">
                          Se rediseñó el onboarding en un flujo progresivo de 3 pasos, aplazando la configuración
                          avanzada. Un asistente de IA sugiere el primer contenido en menos de 60 segundos,
                          reduciendo la fricción y aumentando la tasa de activación.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                          Problemas encontrados
                        </span>
                        <p className="text-sm leading-relaxed text-slate-200">
                          Se rediseñó el onboarding en un flujo progresivo de 3 pasos, aplazando la configuración
                          avanzada. Un asistente de IA sugiere el primer contenido en menos de 60 segundos,
                          reduciendo la fricción y aumentando la tasa de activación.
                        </p>
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
                    <div className="rounded-2xl border border-cyan-500/30 bg-slate-800/60 p-px">
                      <div className="flex items-center gap-2 border-b border-cyan-500/20 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff6467]" />
                        <span className="h-2 w-2 rounded-full bg-[#fdc700]" />
                        <span className="h-2 w-2 rounded-full bg-[#05df72]" />
                        <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-[#03aadd]">
                          v3 — Final
                        </span>
                      </div>
                      <div className="flex items-center justify-center py-20">
                        <p className="text-xs text-slate-500">[ Pantalla final — v3 ]</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-green-700">
                          Solución final
                        </span>
                        <p className="text-sm leading-relaxed text-slate-200">
                          Se rediseñó el onboarding en un flujo progresivo de 3 pasos, aplazando la configuración
                          avanzada. Un asistente de IA sugiere el primer contenido en menos de 60 segundos,
                          reduciendo la fricción y aumentando la tasa de activación.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          Por revisar
                        </span>
                        <p className="text-sm leading-relaxed text-slate-200">
                          Se rediseñó el onboarding en un flujo progresivo de 3 pasos, aplazando la configuración
                          avanzada. Un asistente de IA sugiere el primer contenido en menos de 60 segundos,
                          reduciendo la fricción y aumentando la tasa de activación.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="my-12 text-2xl font-bold text-black dark:text-white">Solución final</h3>

            {/* Wireframes Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
                  <div className="aspect-video rounded bg-white dark:bg-gray-800">
                    <div className="flex h-full flex-col">
                      <div className="h-8 rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                      <div className="flex flex-1">
                        <div className="w-1/4 bg-gray-50 dark:bg-gray-900"></div>
                        <div className="flex-1 bg-white dark:bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 text-6xl font-light text-gray-300 opacity-30 dark:text-gray-700">
              &lt;Más proyectos/&gt;
            </span>
            <h2 className="relative text-4xl font-bold text-black dark:text-white">Más proyectos</h2>
          </div>
        </div>
        <div className="flex gap-16">
          <CardHorizontalDemo project={projects[1]} index="2" />
          <CardHorizontalDemo project={projects[2]} index="3" />
        </div>
      </section>
    </div>
  );
}
