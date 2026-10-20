import { Fragment } from "react";

import { cn } from "@/lib/utils";

/** Generic step-by-step flow, horizontal on desktop and vertical on mobile. */
export function FlowDiagram({ steps, label }: { steps: string[]; label: string }) {
  return (
    <figure aria-label={label} className="relative">
      <ol className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {steps.map((step, i) => {
          const first = i === 0;
          const last = i === steps.length - 1;
          return (
            <Fragment key={step}>
              <li
                className={cn(
                  "relative flex items-center gap-3 rounded-lg border px-4 py-3 lg:min-w-0 lg:flex-1 lg:flex-col lg:items-start lg:gap-2",
                  last ? "border-primary bg-primary text-primary-foreground" : "bg-card text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-widest",
                    last ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-tight">{step}</span>
                {first && <span aria-hidden className="pulse-signal absolute right-3 top-3 size-1.5 rounded-full bg-signal" />}
              </li>
              {!last && (
                <li aria-hidden className="flex items-center justify-center lg:w-8 lg:shrink-0">
                  <span className="flow-line-y block h-6 w-px lg:hidden" />
                  <span className="flow-line-x hidden h-px w-full lg:block" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </figure>
  );
}
