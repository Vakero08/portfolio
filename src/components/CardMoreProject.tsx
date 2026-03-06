import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CardHorizontalDemo({ project, index }: { project: any, index: string }) {
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
                    <CardTitle>{project.titulo}</CardTitle>
                    <CardDescription>{project.descripcion}</CardDescription>
                </CardHeader>
                <CardFooter className='gap-3 py-6'>
                    <Link href={`/case${index}`} className='inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'>
                        Ver proyecto <ChevronRight />
                    </Link>
                </CardFooter>
            </div>
        </Card>
    )
}

