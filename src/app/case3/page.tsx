import Link from "next/link";

const SECTION_BLUE = "text-blue-600 dark:text-blue-400";

export default function ScanAudienceCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-neutral-950 mt-[84px]">
    
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="mb-6 inline-block rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              Caso de estudio: Rediseño Parcial
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Scan Audience
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Scan Audience es una herramienta avanzada diseñada para evaluar el rendimiento de su marca y realizar
              comparaciones con otras marcas en el mercado.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              La plataforma presentaba fricción en puntos importantes, no comunicaban claramente el valor del producto
              ni guiaban al usuario hacia las acciones principales.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  ROL
                </p>
                <p className="font-semibold text-black dark:text-white">Lead UX/UI Designer</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Investigación, diseño y testing</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  EQUIPO
                </p>
                <p className="font-semibold text-black dark:text-white">5 personas</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">1 diseñador, 3 desarrolladores, 1 PM</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  DURACIÓN
                </p>
                <p className="font-semibold text-black dark:text-white">3 meses</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Octubre 2025 - Enero 2026</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-4/3 w-full max-w-lg overflow-hidden rounded-xl bg-neutral-100 shadow-xl dark:bg-neutral-800">
              <div className="flex h-full flex-col">
                <div className="flex h-10 items-center gap-2 rounded-t-xl border-b border-neutral-200 bg-neutral-100 px-4 dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex flex-1">
                  <div className="w-1/5 border-r border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900" />
                  <div className="flex-1 bg-white dark:bg-neutral-800">
                    <div className="flex h-full flex-col gap-3 p-4">
                      <div className="flex gap-2">
                        <div className="h-2 flex-1 rounded bg-neutral-200 dark:bg-neutral-600" />
                        <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-600" />
                      </div>
                      <div className="flex flex-1 gap-3">
                        <div className="flex-1 rounded-lg bg-neutral-100 dark:bg-neutral-700" />
                        <div className="w-1/3 space-y-2 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-700">
                          {[1, 2, 3, 4].map((i) => (
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
      </section>

      {/* Problemas */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Problemas</h2>
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
          <h2 className={`mb-8 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Objetivos</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
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
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
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
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Investigación</h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se realizó una investigación ligera, enfocada únicamente en las pantallas a rediseñar:
          </p>
          <ul className="list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>Análisis heurístico de usabilidad</li>
            <li>Revisión de flujos reales de uso (Clarity, PostHog)</li>
          </ul>
        </div>
      </section>

      {/* Insights clave */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Insights clave</h2>
          <ul className="list-disc space-y-3 pl-6 text-neutral-700 dark:text-neutral-300">
            <li>Encender el valor de la plataforma antes del inicio de sesión</li>
            <li>El home debe tener opciones que el usuario use con frecuencia</li>
            <li>Falta de jerarquía visual desorienta al usuario</li>
          </ul>
        </div>
      </section>

      {/* Diseño */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Diseño</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Se trabajó tanto en una plataforma nueva, donde se diseñó todo el flujo desde cero, como en la mejora de un
            producto existente, aplicando aprendizajes del research.
          </p>
        </div>
      </section>

      {/* Wireframes de alta fidelidad */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">Wireframes de alta fidelidad</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-neutral-100 shadow-lg dark:bg-neutral-800">
                <div className="flex flex-col">
                  <div className="flex h-10 items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex flex-1">
                    <div className="w-1/5 bg-neutral-50 dark:bg-neutral-900" />
                    <div className="flex-1 bg-white dark:bg-neutral-800">
                      <div className="flex aspect-video items-center justify-center p-4">
                        <div className="h-full w-full rounded-lg bg-neutral-100 dark:bg-neutral-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados e impacto */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 px-8 py-16 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Resultados e impacto</h2>
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
          <h2 className={`mb-8 text-right text-3xl font-bold md:text-4xl ${SECTION_BLUE}`}>Aprendizajes</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-bold text-black dark:text-white">Flujo ordenado hace la diferencia:</p>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Mantener un orden claro, con jerarquía visual y una UI clara. Mejora la primera impresión y la adopción
                de la plataforma.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold text-black dark:text-white">Aplicar heurísticas clave:</p>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                La validación y aplicación de heurísticas puede ser el punto de partida para mejorar y homologar el
                diseño. Pueden ser clave al momento de diseñar para saber cómo queremos comunicar nuestros diseños.
              </p>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}
