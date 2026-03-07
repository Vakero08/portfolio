"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"

const services = [
    {
        id: "01",
        title: "UX Research & Strategy",
        desc: "Investigo, entrevisto y analizo para tomar decisiones basadas en datos reales, no suposiciones.",
    },
    {
        id: "02",
        title: "UI Design & Prototyping",
        desc: "Transformo hallazgos en interfaces visuales coherentes, escalables y accesibles.",
    },
    {
        id: "03",
        title: "Frontend Implementation",
        desc: "Llevo los diseños a código con React y Next.js, garantizando fidelidad pixel-perfect.",
    },
]

const skills = [
    { category: "Design", items: ["UX Research", "UI Design", "Prototyping", "Design Systems", "A/B Testing", "User Centered Design"] },
    { category: "Tools", items: ["Figma", "FigJam", "Framer", "Maze", "AI Design tools"] },
    { category: "Code", items: ["TypeScript", "React", "Next.js", "Tailwind", "Git", "CI/CD", "Node.js"] },
]

const stats = [
    { value: "3+", label: "Años de experiencia" },
    { value: "10+", label: "Proyectos" },
    { value: "5+", label: "Clientes" },
    { value: "∞", label: "Curiosidad" },
]

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease },
    }),
}

export default function AboutPage() {

    // Enable static rendering
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-black mt-[84px]">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="mx-auto w-full max-w-6xl px-8 pt-20 pb-12">
                <div className="flex items-end justify-between gap-8">

                    {/* Left: name + tags */}
                    <div className="flex-1">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 110 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.75, ease }}
                                className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-tight text-black dark:text-white"
                            >
                                Jhonatan
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 110 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.75, delay: 0.08, ease }}
                                className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-tight text-primary"
                            >
                                Duran.
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            {["UX Designer", "UI Designer", "Frontend Dev"].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: circular photo + social links */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease }}
                        className="flex flex-col items-center gap-4 shrink-0"
                    >
                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-primary/20">
                            <Image
                                src="/me.png"
                                alt="Jhonatan Duran"
                                width={176}
                                height={176}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <div className="flex gap-3">
                            <Link
                                href="https://www.linkedin.com/in/jonaduran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                            <Link
                                href="mailto:jhonamoises@gmail.com"
                                aria-label="Email"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ── Divider ──────────────────────────────────── */}
            <div className="mx-auto w-full max-w-6xl px-8">
                <div className="border-t border-border" />
            </div>

            {/* ── Quién soy ────────────────────────────────── */}
            <section className="mx-auto w-full max-w-6xl px-8 py-20">
                <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

                    <div className="pt-1">
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.18em]">
                            01 — Quién soy
                        </span>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        custom={0}
                        className="space-y-4"
                    >
                        <p className="text-2xl leading-relaxed font-light text-black dark:text-white">
                            Hola soy Jona, Diseñador UX/UI basado en Quito.
                        </p>
                        <p className="text-2xl leading-relaxed font-light text-black dark:text-white">

                            Con +6 años de experiencia construyendo productos digitales de alto impacto.

                            Mi valor diferencial reside en el equilibrio entre dos mundos: la estrategia de diseño UX/UI y la ingeniería de software. No solo diseño interfaces visualmente atractivas y basadas en investigación profunda; con mi background en desarrollo de software, entiendo como funciona el código y como contribuye a una usabilidad superior.
                            Esta visión 360° me permite asegurar que cada píxel diseñado sea técnicamente viable y contribuya a una experiencia de usuario superior.
                        </p>

                        <p className="text-2xl leading-relaxed font-light text-black dark:text-white">

                            A lo largo de mi trayectoria, he podido colaborar de manera remota, trabajando como consultor para empresas en EE. UU. (Aktiun) y liderando procesos de innovación en Ecuador:
                        </p>

                        <p className="text-2xl leading-relaxed font-light text-black dark:text-white">
                            Enfoque UX/UI: Especialista en traducir hallazgos de investigación y pruebas A/B en prototipos de alta fidelidad. Tengo la obsesión de reducir la fricción en flujos críticos, garantizando que el diseño siempre responda a las necesidades reales del usuario.
                        </p>

                        <p className="text-2xl leading-relaxed font-light text-black dark:text-white">



                            Creo firmemente que el software de éxito nace de la intersección entre un código limpio y una experiencia humana intuitiva. Mi objetivo es seguir liderando proyectos donde la innovación técnica y el diseño centrado en el usuario sean los pilares para escalar productos globales.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            Antes de abrir Figma, entiendo el problema. Creo que el mejor diseño es el que no se nota, porque simplemente resuelve.
                        </p>
                    </motion.div>

                </div>
            </section >

            {/* ── Qué hago ─────────────────────────────────── */}
            <section className="mx-auto w-full max-w-6xl px-8 py-20 border-t border-border" >
                <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

                    <div className="pt-1">
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.18em]">
                            02 — Qué hago
                        </span>
                    </div>

                    <div className="space-y-10">
                        {services.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                custom={i}
                                className="group flex gap-8 border-b border-border pb-10 last:border-0 last:pb-0"
                            >
                                <span className="font-mono text-sm text-muted-foreground shrink-0 pt-1">
                                    {item.id}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-primary transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Skills / Stack ────────────────────────────── */}
            <section className="mx-auto w-full max-w-6xl px-8 py-20 border-t border-border" >
                <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

                    <div className="pt-1">
                        <span className="font-mono text-xs text-primary uppercase tracking-[0.18em]">
                            03 — Stack
                        </span>
                    </div>

                    {/* Code-block aesthetic */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeUp}
                        custom={0}
                        className="rounded-xl border border-border bg-muted/40 p-6 font-mono text-sm space-y-4"
                    >
                        <p className="text-muted-foreground mb-4 text-xs">skills.json</p>
                        <p className="text-muted-foreground">{"{"}</p>
                        {skills.map((group, i) => (
                            <div key={i} className="ml-4 mt-1">
                                <span className="text-primary">&quot;{group.category}&quot;</span>
                                <span className="text-muted-foreground">{": ["}</span>
                                {group.items.map((skill, j) => (
                                    <span key={j} className="text-black dark:text-white font-bold">
                                        &quot;{skill}&quot;{j < group.items.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                                <span className="text-muted-foreground">{"]"}{i < skills.length - 1 ? "," : ""}</span>
                            </div>
                        ))}
                        <p className="text-muted-foreground mt-1">{"}"}</p>
                    </motion.div>

                </div>
            </section>





        </div >
    )
}
