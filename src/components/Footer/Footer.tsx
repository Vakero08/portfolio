import Link from "next/link";
import { reenie } from '@/app/ui/fonts';

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-6xl px-8 py-12 text-center">
            <section id="contacto" className="mx-auto w-full max-w-6xl px-8 py-16">
                <div className="mb-12 text-center">
                    <div className="relative">
                        <span className="absolute left-1/2 top-[-32px] -translate-x-1/2 md:text-6xl text-4xl font-light text-gray-300 opacity-30 dark:text-gray-700">
                            &lt;CONTACTO/&gt;
                        </span>
                        <h2 className="relative text-4xl font-bold text-black dark:text-white">CONTACTO</h2>
                    </div>
                </div>

                <div className="mx-auto max-w-2xl text-center">
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Vamos a conectar</h3>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                        ¡Ponte en contacto para charlar o simplemente para saludarnos! 👋
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href="mailto:jhonamoises@gmail.com"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            @jhonamoises@gmail.com
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jonaduran/"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Jhonatan Duran
                        </Link>
                    </div>
                </div>
            </section>



            <p className={`text-8xl italic text-gray-600 dark:text-gray-400  ${reenie.className} antialiased`}>
                Gracias por visitar
            </p>
        </footer>
    );
}