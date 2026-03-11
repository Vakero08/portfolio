import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function CardHorizontalDemo({ project, index }: { project: any, index: string }) {
    const t = useTranslations('Content.projects')
    const tCard = useTranslations('CardHome')
    return (
        <Card className='max-w-lg py-0 sm:flex-row sm:gap-0 w-full'>
            <CardContent className='grow-1 px-0'>
                <Image
                    height={1000}
                    width={1000}
                    src={project.imagen1}
                    alt='Banner'
                    className='size-full rounded-l-xl'
                />
            </CardContent>
            <div className='sm:min-w-54'>
                <CardHeader className='pt-6'>
                    <CardTitle>{t(`${project.key}.titulo`)}</CardTitle>
                    <CardDescription>{t(`${project.key}.descripcion`)}</CardDescription>
                </CardHeader>
                <CardFooter className='gap-3 py-6'>
                    <Link href={`/case${index}`} className='inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-3 font-medium text-xs text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'>
                        {tCard('cta')} <ChevronRight />
                    </Link>
                </CardFooter>
            </div>
        </Card>
    )
}

