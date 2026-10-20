import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

import { BrandMark } from "./BrandMark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-(--header-h) border-b transition-colors",
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Ir para o início">
          <BrandMark />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-9 px-4 sm:inline-flex">
            <a href="#contato">Vamos conversar</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="size-5!" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-2">
                <BrandMark />
              </div>
              <nav aria-label="Menu móvel" className="mt-10">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.href} className="border-b">
                      <SheetClose asChild>
                        <a href={item.href} className="block py-4 font-display text-lg font-medium text-foreground">
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-8 w-full">
                  <a href="#contato">Vamos conversar</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
