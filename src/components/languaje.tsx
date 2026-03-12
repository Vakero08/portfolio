"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

import { useTranslations } from "next-intl"
import { ES, US } from "country-flag-icons/react/3x2"



export function LanguajeSelect() {
    const t = useTranslations()
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()

    const locales = [
        { code: "en", label: t('english'), flag: <US /> },
        { code: "es", label: t('espanol'), flag: <ES /> },
    ] as const

    const changeLang = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
    }

    const currentFlag = locales.find(l => l.code === currentLocale)?.flag ?? "🌐"

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <span>{currentFlag}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit min-w-0">
                <DropdownMenuGroup className="w-fit">
                    <DropdownMenuRadioGroup value={currentLocale} onValueChange={(value) => changeLang(value)}>
                        {locales.map(({ code, label, flag }) => (
                            <DropdownMenuRadioItem key={code} value={code}>
                                {flag} {label}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>


                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
