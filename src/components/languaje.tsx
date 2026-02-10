"use client"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    
} from "@/components/ui/dropdown-menu"

export function LanguajeSelect() {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <span>🇺🇸</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit min-w-0">
                <DropdownMenuGroup className="w-fit">
                    {/* <DropdownMenuLabel>Seleccionar idioma:</DropdownMenuLabel> */}
                    <DropdownMenuItem className="w-fit">🇺🇸 Ingles</DropdownMenuItem>
                    <DropdownMenuItem className="w-fit">🇪🇸 Español</DropdownMenuItem>
                </DropdownMenuGroup>
            
            </DropdownMenuContent>
        </DropdownMenu>
    )
}