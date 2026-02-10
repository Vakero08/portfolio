
"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"
import Link from "next/link";
import { LanguajeSelect } from "../languaje";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Header() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <motion.header className="px-8 py-6 fixed top-0 left-0 right-0 z-50 mx-auto backdrop-blur-md bg-secondary/30"
            animate={{
                width: hidden ? "800px" : "100%",
                border: hidden ? "1px solid oklch(0.6898 0.135 228.6/ 10%)": "",
                borderRadius: hidden ? "1000px": "",
                marginTop: hidden ? "16px": "",
            }}
            transition={{ duration: 0.3, ease: "linear" }}

        >
            <nav className="mx-auto flex items-center ">
                <div className="flex gap-16 flex-1 justify-center text-xl">
                    <Link href="/" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                        Inicio
                    </Link>
                    <Link href="/about" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                        Sobre mí
                    </Link>
                    <Link href="/#portafolio" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                        Portafolio
                    </Link>
                    <Link href="/cv" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                        CV
                    </Link>

                </div>
                <div className="flex items-center gap-4">
                    {/* Language selector - US Flag */}
                    <LanguajeSelect />
                    {/* Dark mode toggle - Sun icon */}
                    <AnimatedThemeToggler />

                </div>
            </nav>
        </motion.header>
    )

}