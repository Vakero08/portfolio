"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

const locales = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
] as const

export function LanguajeSelect() {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()

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
                    {locales.map(({ code, label, flag }) => (
                        <DropdownMenuItem
                            key={code}
                            onSelect={() => changeLang(code)}
                            className="w-fit"
                        >
                            {flag} {label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
