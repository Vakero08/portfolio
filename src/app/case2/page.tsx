import Link from "next/link";

export default function SocialAlertCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-neutral-950">
    

      {/* Alert Banner */}
      <div className="border-y border-black/30 bg-[#2c2c2c] px-8 py-3 dark:border-white/20">
        <p className="mx-auto max-w-6xl text-center text-sm text-white">
          ¡Avistamiento detectado! El usuario comentó un estado de ánimo relacionado con el nombre de negocio
        </p>
      </div>

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
          Social Alert
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-black dark:text-neutral-300">
            Social Alert es una herramienta de escucha y monitoreo de redes sociales, para gestión y alerta temprana
            de crisis. Identificando comentarios, palabras y patrones negativos o positivos para así prevenir crisis
            o actuar a tiempo.
          </p>
          <div className="flex items-center justify-center">
            <div className="aspect-video w-full max-w-lg overflow-hidden rounded-lg bg-neutral-100 shadow-xl dark:bg-neutral-800">
              <div className="flex h-full flex-col">
                <div className="flex h-8 items-center gap-2 rounded-t-lg border-b border-neutral-200 bg-neutral-100 px-3 dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="flex flex-1">
                  <div className="w-1/5 border-r border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900" />
                  <div className="flex-1 bg-white dark:bg-neutral-800">
                    <div className="flex h-full flex-col gap-4 p-6">
                      <div className="flex gap-4">
                        <div className="h-3 flex-1 rounded bg-neutral-200 dark:bg-neutral-600" />
                        <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-600" />
                      </div>
                      <div className="flex flex-1 gap-4">
                        <div className="flex-1 rounded-lg bg-neutral-100 dark:bg-neutral-700" />
                        <div className="w-1/3 space-y-2 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-700">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-2 rounded bg-neutral-200 dark:bg-neutral-600" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-12 grid gap-8 border-t border-neutral-200 pt-12 dark:border-neutral-800 md:grid-cols-3">
          <div>
            <p className="mb-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Rol:</p>
            <p className="text-base font-medium text-black dark:text-white">Lead UX/UI Designer</p>
            <p className="mt-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Responsabilidades:</p>
            <p className="text-base text-black dark:text-neutral-300">investigación, diseño y testing.</p>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Duración:</p>
            <p className="text-base font-medium text-black dark:text-white">5 Semanas (2024)</p>
            <p className="mt-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Proyecto:</p>
            <p className="text-base text-black dark:text-neutral-300">Freelance Consultoría UX.</p>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Herramientas:</p>
            <p className="text-base text-black dark:text-neutral-300">Figma, Maze.</p>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">El Problema</h2>
          <p className="mb-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Una plataforma experimentaba diversos problemas de usabilidad que afectaban directamente la experiencia
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
          <h2 className="mb-8 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Objetivos</h2>
          <div className="grid gap-12 md:grid-cols-2">
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">User Research</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Para entender mejor el fenómeno y el comportamiento de los usuarios se realizaron las siguientes actividades:
          </p>
          <ul className="space-y-2 pl-6">
            {[
              "Benchmark de plataformas similares.",
              "Encuestas a usuarios online.",
              "Prototipado de validación de usuarios (usando herramientas como Figma y Maze).",
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
            Se realizaron 8 encuestas a usuarios, como del equipamiento. La información resultado de estas encuestas
            fue la siguiente:
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50">
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Punto de dolor</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Hallazgos principales</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Soluciones en mente</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Oportunidades de mejora</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Flujos complejos</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Duplicación de flujos de creación</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Simplificación</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Unificar procesos</td>
                </tr>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Demasiada información</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Sobrecarga cognitiva</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Mejor jerarquía</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Reducir contenido visible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Creación de consultas</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Complejidad en configuración</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Guías paso a paso</td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Asistentes contextuales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benchmark de plataformas similares */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Benchmark de plataformas similares</h3>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se analizaron algunas de las plataformas de monitoreo de RRSS (Redes Sociales) para identificar y
            comprender modelos de mejora y de interacción.
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50">
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Empresas</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Características principales</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Factores</th>
                  <th className="px-4 py-3 font-semibold text-black dark:text-white">Facilidades</th>
                </tr>
              </thead>
              <tbody>
                {["Mention", "Brandwatch", "Brand24", "Sprout Social"].map((company) => (
                  <tr key={company} className="border-b border-neutral-200 last:border-0 dark:border-neutral-700">
                    <td className="px-4 py-3 font-medium text-black dark:text-white">{company}</td>
                    <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Monitoreo, alertas, dashboards</td>
                    <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Escucha social, analytics</td>
                    <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">APIs, integraciones</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insights encontrados */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">Insights encontrados</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <svg className="h-6 w-6 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Flujos complejos</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Muchos flujos duplicados de creación, configuración y de plantillas generaban confusión a los usuarios.
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Simplificar flujos.</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <svg className="h-6 w-6 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" strokeLinecap="round" d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Demasiada información</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                Mucha información en una sola vista, lo que impedía una lectura rápida y clara del contenido al usuario.
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Reducir contenido y mejorar la jerarquía de la información.</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03AADD]/10">
                <svg className="h-6 w-6 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">Creación de consultas</h4>
              <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                La principal complejidad era en la creación de consultas, haciendo pruebas y con elementos que lo
                dificultaban para conseguir la respuesta o análisis de la misma.
              </p>
              <div className="rounded-lg bg-emerald-100 px-4 py-2 dark:bg-emerald-900/30">
                <p className="font-medium text-black dark:text-white">Enfoque: Reducir la complejidad y mejorar la experiencia de creación de consultas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diseño */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Diseño</h2>
          <p className="mb-12 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se trabajó tanto en una plataforma nueva, donde se diseñó todo el flujo desde cero, como en la mejora de un
            producto existente, aplicando aprendizajes del research.
          </p>
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Wireframes de alta Fidelidad</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-800">
                  <div className="flex h-full flex-col">
                    <div className="flex h-6 items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-2 dark:border-neutral-700 dark:bg-neutral-800">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex flex-1">
                      <div className="w-1/5 bg-neutral-50 dark:bg-neutral-900" />
                      <div className="flex-1 bg-white dark:bg-neutral-800">
                        <div className="flex h-full items-center justify-center p-4">
                          <div className="h-1/2 w-full rounded bg-neutral-100 dark:bg-neutral-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Testing</h2>
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
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Solución Final</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            El resultado fue una nueva versión del producto con:
          </p>
          <ul className="space-y-3">
            {[
              "Interfaces más tangibles y claras.",
              "Flujos más cortos y entendibles.",
              "Jerarquía visual consecuente.",
              "Diseño consistente y alineado a un sistema visual.",
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
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-right text-3xl font-bold text-[#03AADD] md:text-4xl">Aprendizajes</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Replicar lo que funciona:</strong> Algunas plataformas ya
                habían establecido valores de lanzamiento que se tenía que mantener, pero con un mejor diseño UX/UI. No
                había que reinventar la rueda por completo, solo pulir y clasificar.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#03AADD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-black dark:text-white">Funcionalidad sobre estilo bonito:</strong> Muchos
                diseñadores de producto priorizan el estilo, de forma ininterrumpida sin la información o resolución de
                los problemas principales que se han analizado. Para ello hay que tener una determinada base de UX/UI,
                para así no trabajar sin preocupaciones en la plataforma.
              </p>
            </li>
          </ul>
        </div>
      </section>

     
    </div>
  );
}
