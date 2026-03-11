import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function CardHome({ project, index }: { project: any, index: any }) {
    const t = useTranslations('Content.projects');
    const tCard = useTranslations('CardHome');


    return (
        <div className="md:grid  md:grid-cols-8 md:gap-16 ">
            <div className={`mb-4 overflow-hidden rounded-lg  md:col-span-5 h-96 ${index === 1 ? "order-2" : "order-1"} hidden md:block`}>
                <div className="relative aspect-video  ">
                    {/* Placeholder for project image */}
                    <ImageZoom  >
                        <Image
                            width={1000}
                            height={1000}
                            src={project.imagen1}
                            alt="Placeholder image case study"

                        />
                    </ImageZoom>
                </div>
            </div>
            <div className={`md:flex-col md:col-span-3 my-auto ${index === 1 ? "order-1" : "order-2"}`}>
                <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">{t(`${project.key}.titulo`)}</h3>
                    {project.tags.map((tag: any) => {
                        return <span key={tag} className="rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {tag}
                        </span>
                    })}

                </div>
                <div className={`mb-4 overflow-hidden rounded-lg  md:col-span-5 md:h-96 h-auto ${index === 1 ? "order-2" : "order-1"} block md:hidden`}>
                    <div className="relative aspect-video  ">
                        {/* Placeholder for project image */}
                        <ImageZoom  >
                            <Image
                                width={1000}
                                height={1000}
                                src={project.imagen1}
                                alt="Placeholder image case study"

                            />
                        </ImageZoom>
                    </div>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {t(`${project.key}.descripcion`)}
                </p>
                <Link
                    href={`/case${index + 1}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    {tCard('cta')}
                    <ChevronRight />
                </Link>
            </div>
        </div>
    )
}