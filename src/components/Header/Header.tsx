
"use client"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { LanguajeSelect } from "../languaje";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const t = useTranslations('Header');
    const locale = useLocale();

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 992)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [menuOpen])

    const navLinks: { href: string; label: string; download?: string }[] = [
        { href: "/", label: t('home') },
        { href: "/about", label: t('about') },
        { href: "/#portafolio", label: t('portfolio') },
        { href: `/CV-UXUI-${locale}.pdf`, label: t('cv'), download: "CV-UXUI.pdf" },
    ]

    return (
        <>
            <motion.header
                className={` px-8 py-6 fixed top-0 left-0 right-0 ${isMobile && "!w-full"} z-50 mx-auto backdrop-blur-md bg-secondary/30`}
                animate={!isMobile ? {
                    width: hidden ? "800px" : "100%",
                    border: hidden ? "1px solid oklch(0.6898 0.135 228.6/ 10%)" : "",
                    borderRadius: hidden ? "1000px" : "",
                    marginTop: hidden ? "16px" : "",
                } : {}}
                transition={{ duration: 0.3, ease: "linear" }}
            >
                <nav className="mx-auto flex items-center">
                    {isMobile ? (
                        // Mobile: logo/name on left, hamburger on right
                        <>
                            <div className="flex-1" >
                                <button
                                    onClick={() => setMenuOpen(true)}
                                    aria-label="Abrir menú"
                                    className="flex flex-col justify-center items-center w-9 h-9 gap-[6px]"
                                >
                                    <span className="block w-6 h-0.5 bg-black dark:bg-white rounded" />
                                    <span className="block w-6 h-0.5 bg-black dark:bg-white rounded" />
                                    <span className="block w-6 h-0.5 bg-black dark:bg-white rounded" />
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <LanguajeSelect />
                                <AnimatedThemeToggler />
                            </div>
                        </>
                    ) : (
                        // Desktop
                        <>
                            <div className="flex gap-20 flex-1 justify-center text-xl">
                                {navLinks.map(link => {
                                    const isDownload = !!link.download;
                                    const Component = isDownload ? "a" : Link;

                                    return (
                                        <Component
                                            key={link.href}
                                            href={link.href}
                                            {...(isDownload ? { download: link.download } : {})}
                                            className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                        >
                                            {link.label}
                                        </Component>
                                    );
                                })}
                            </div>
                            <div className="flex items-center gap-4">
                                <LanguajeSelect />
                                <AnimatedThemeToggler />
                            </div>
                        </>
                    )}
                </nav>
            </motion.header>

            {/* Full-screen mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                            className="absolute top-6 right-8 flex items-center justify-center w-10 h-10"
                        >
                            <span className="block absolute w-7 h-0.5 bg-black dark:bg-white rounded rotate-45" />
                            <span className="block absolute w-7 h-0.5 bg-black dark:bg-white rounded -rotate-45" />
                        </button>

                        <nav className="flex flex-col items-center gap-10">
                            {navLinks.map((link, i) => {
                                const isDownload = !!link.download;
                                const Component = isDownload ? "a" : Link;

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                    >
                                        <Component
                                            href={link.href}
                                            {...(isDownload ? { download: link.download } : {})}
                                            onClick={() => setMenuOpen(false)}
                                            className="text-4xl font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {link.label}
                                        </Component>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
