import { cn } from "@/lib/utils";

export function BrandMark({ className, tone = "default" }: { className?: string; tone?: "default" | "ink" }) {
  return (
    <img
      src="/Logo.png"
      alt="Cássio Bomfim — Desenvolvedor de Software e Engenheiro de Dados"
      className={cn(
        "h-12 w-auto max-w-[7rem] object-contain sm:max-w-[8rem]",
        tone === "ink" && "rounded-sm bg-white p-1",
        className,
      )}
    />
  );
}
