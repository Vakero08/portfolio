export default function TokinAiCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Caso de estudio: Creación de una aplicación preliminar
        </p>
        <h1 className="mb-8 text-6xl font-bold text-black dark:text-white">
          TokinAi
        </h1>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Description */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              TokinAi es una aplicación diseñada para emprendedores y creadores de contenido que buscan generar contenido visual y textual para redes sociales de manera eficiente usando inteligencia artificial.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              La aplicación surge de la necesidad de democratizar la creación de contenido profesional para pequeñas empresas que no cuentan con un equipo de diseño dedicado.
            </p>

            {/* Project Details */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Rol</h3>
                <p className="text-base font-medium text-black dark:text-white">Lead UI/UX Designer</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">UI/UX, Prototyping, Usability Testing, Interaction Design</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Equipo</h3>
                <p className="text-base font-medium text-black dark:text-white">1 UX/UI Designer</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">1 Developer, 1 Project Manager</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Duración</h3>
                <p className="text-base font-medium text-black dark:text-white">6 meses</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">August - January</p>
              </div>
            </div>
          </div>

          {/* Right Column - Device Mockups */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="mb-4 rounded-lg bg-gray-100 p-4 shadow-lg dark:bg-gray-900">
                <div className="aspect-video rounded bg-white dark:bg-gray-800">
                  <div className="flex h-full">
                    <div className="w-1/4 bg-gray-50 dark:bg-gray-900"></div>
                    <div className="flex-1 bg-white dark:bg-gray-800"></div>
                  </div>
                </div>
              </div>
              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 right-0 w-32 rounded-lg bg-gray-100 p-2 shadow-lg dark:bg-gray-900">
                <div className="aspect-[9/16] rounded bg-white dark:bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Problema Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-blue-600 dark:text-blue-400">El Problema</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Las pequeñas empresas y creadores de contenido enfrentan desafíos significativos para mantener una presencia activa y consistente en redes sociales. La falta de tiempo, recursos y conocimiento específico dificulta la creación constante de contenido de calidad. Según estudios recientes, el 25% del contenido es creado por solo el 1% de los creadores.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Esta situación genera una limitada visibilidad y contenido inconsistente para las marcas, afectando su capacidad de crecimiento y engagement con su audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-blue-600 dark:text-blue-400">User Research</h2>
            
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Análisis competitivo</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Se examinaron plataformas similares para entender el mercado y las oportunidades de diferenciación.
            </p>

            {/* Competitive Analysis */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left - Image */}
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
                <div className="aspect-video rounded bg-white dark:bg-gray-800">
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">
                    INPUT 1
                  </div>
                </div>
              </div>

              {/* Right - Description */}
              <div>
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">Input Magic</h4>
                <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Plataforma para la creación automática e ilimitada de contenido para marketing y redes sociales.
                </p>

                <div className="mb-6">
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Funciones</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700 dark:text-gray-300">Automatización de videos e imágenes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700 dark:text-gray-300">Avances de marketing multilingüe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700 dark:text-gray-300">Plantillas y recursos de marketing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Puntos débiles</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-base text-gray-700 dark:text-gray-300">Falta de contexto de negocio/nicho</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-base text-gray-700 dark:text-gray-300">No sugiere frecuencia de publicación para diferentes redes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
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
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Encuestas</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Se realizaron entrevistas con emprendedores para comprender sus necesidades y recopilar datos relevantes.
            </p>

            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Insights encontrados</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              De las observaciones de los usuarios surgieron tres categorías principales de insights.
            </p>

            {/* Insights Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Tiempo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  La mayoría de los emprendedores carecen del tiempo para aprender, ejecutar y vitalizar sus cuentas de redes sociales.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Personalización</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Muchos usuarios encuentran que el contenido generado por IA genérico no está personalizado o alineado con la marca.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-blue-600 dark:text-blue-400">Diseño</h2>
            
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Wireframes de alta fidelidad</h3>
            
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
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-blue-600 dark:text-blue-400">Testing</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* What Worked */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-2">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-semibold text-black dark:text-white">Qué funcionó</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Creación rápida de contenido: Los usuarios destacaron la eficiencia...
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Programación/Publicación automática: Los usuarios impresionados por las recomendaciones de IA...
                    </span>
                  </li>
                </ul>
              </div>

              {/* Needs Improvement */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-2">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h3 className="text-xl font-semibold text-black dark:text-white">Tocó mejorar</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Inicio de sesión en redes sociales: Los usuarios encontraron confusa la vinculación de cuentas...
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      La IA generó 100 memes, impidiendo avanzar más...
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="mx-auto w-full max-w-6xl px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-blue-600 dark:text-blue-400">Aprendizajes</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  1
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Estudio previo de contenido: Es fundamental entender el tipo de contenido que funciona mejor para cada nicho antes de diseñar la solución.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  2
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Tiempo VS Perfil: Encontrar el equilibrio entre la automatización y la personalización es clave para el éxito del producto.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  3
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Iterar continuamente: El feedback de los usuarios es invaluable y debe integrarse en cada fase del diseño.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-600 dark:text-blue-400">
                  4
                </span>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Involucrar a los stakeholders desde el inicio asegura alineación y reduce cambios costosos en etapas posteriores.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
