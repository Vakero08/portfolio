import { Separator } from "@/components/ui/separator";

export function TitleLine({
    numero,
    titulo,
    id,
}: {
    numero: number;
    titulo: string;
    id?: string;
}) {
    return (
        <div
            id={id}
            className="flex items-center justify-center gap-4 max-w-6xl mx-auto w-full sm:mb-8 sm:mt-16 mb-4 mt-16 px-4 scroll-mt-28"
        >
            <span className="text-primary flex-1">0{numero}</span>
            <Separator className="flex-12 bg-slate-200 dark:bg-slate-700" />
            <span className="text-primary font-bold text-lg md:text-4xl flex-1">{titulo}</span>
        </div>
    );
}