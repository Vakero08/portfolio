import { Separator } from "@/components/ui/separator";

export function TitleLine({ numero, titulo }: { numero: number, titulo: String }) {
    return <div className="flex items-center  justify-center gap-4 max-w-6xl mx-auto w-full sm:mb-8 sm:mt-16 mb-4 mt-16 px-4">
        <span className="text-primary flex-1">0{numero}</span><Separator className="flex-12 bg-slate-200 dark:bg-slate-700" /><span className="text-primary font-bold text-lg md:text-4xl flex-1">{titulo}</span>
    </div>
}