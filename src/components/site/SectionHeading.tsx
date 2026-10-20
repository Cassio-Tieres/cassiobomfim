import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "default" | "ink";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, id, align = "left", tone = "default", className }: Props) {
  const ink = tone === "ink";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-2", ink ? "text-signal" : "text-primary", align === "center" && "justify-center")}>
        <span aria-hidden className={cn("inline-block h-px w-6", ink ? "bg-signal" : "bg-primary")} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl",
          ink ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", ink ? "text-ink-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
