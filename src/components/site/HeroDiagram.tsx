/**
 * Abstract, illustrative diagram of connected systems.
 * Not a reproduction of any real architecture.
 * Horizontal on wider screens, vertical on phones so labels stay legible.
 */
const ARIA =
  "Diagrama ilustrativo: e-mails, APIs e planilhas passam por um fluxo de orquestração que extrai, trata, valida e carrega os dados em banco de dados, sistema de tickets e relatórios.";
const STEPS = ["extrair", "tratar", "validar", "carregar"];

function CoreSteps({ x, y, cols }: { x: number; y: number; cols: 1 | 2 }) {
  return (
    <>
      {STEPS.map((step, i) => {
        const col = cols === 2 ? i % 2 : 0;
        const row = cols === 2 ? Math.floor(i / 2) : i;
        const sx = x + col * 92;
        const sy = y + row * 28;
        return (
          <g key={step}>
            <rect x={sx} y={sy - 9} width={10} height={10} rx={2} className={i === 2 ? "fill-signal" : "fill-primary-foreground/25"} />
            <text x={sx + 18} y={sy} className="fill-primary-foreground font-mono text-[12px]">
              {step}
            </text>
          </g>
        );
      })}
    </>
  );
}

function Horizontal() {
  const W = 540;
  const NW = 138;
  const NH = 44;
  const core = { x: 204, y: 130, w: 132, h: 180 };
  const sources = [
    { label: "E-mails", y: 50 },
    { label: "APIs externas", y: 190 },
    { label: "Planilhas", y: 330 },
  ];
  const targets = [
    { label: "Banco de dados", y: 50 },
    { label: "Tickets", y: 190 },
    { label: "Relatórios", y: 330 },
  ];
  const ports = [core.y + 60, core.y + 90, core.y + 120];
  const right = core.x + core.w;

  return (
    <svg viewBox={`0 0 ${W} 424`} role="img" aria-label={ARIA} className="h-auto w-full">
      {sources.map((s, i) => {
        const y1 = s.y + NH / 2;
        return (
          <path
            key={s.label}
            d={`M${NW + 6} ${y1} C ${NW + 36} ${y1}, ${core.x - 30} ${ports[i]}, ${core.x} ${ports[i]}`}
            className="flow-line fill-none stroke-primary/45"
            strokeWidth={1.5}
          />
        );
      })}
      {targets.map((t, i) => {
        const y2 = t.y + NH / 2;
        const x2 = W - NW - 6;
        return (
          <path
            key={t.label}
            d={`M${right} ${ports[i]} C ${right + 30} ${ports[i]}, ${x2 - 36} ${y2}, ${x2} ${y2}`}
            className="flow-line fill-none stroke-primary/45"
            strokeWidth={1.5}
          />
        );
      })}

      {sources.map((s) => (
        <g key={s.label}>
          <rect x={6} y={s.y} width={NW} height={NH} rx={8} className="fill-card stroke-border-strong" />
          <circle cx={24} cy={s.y + NH / 2} r={3.5} className="pulse-signal fill-signal" />
          <text x={36} y={s.y + NH / 2 + 4} className="fill-foreground font-mono text-[12px]">
            {s.label}
          </text>
        </g>
      ))}
      {targets.map((t) => (
        <g key={t.label}>
          <rect x={W - NW - 6} y={t.y} width={NW} height={NH} rx={8} className="fill-card stroke-border-strong" />
          <rect x={W - NW + 8} y={t.y + NH / 2 - 4} width={8} height={8} rx={2} className="fill-primary" />
          <text x={W - NW + 24} y={t.y + NH / 2 + 4} className="fill-foreground font-mono text-[12px]">
            {t.label}
          </text>
        </g>
      ))}

      <rect x={core.x} y={core.y} width={core.w} height={core.h} rx={12} className="fill-primary" />
      <text x={core.x + 16} y={core.y + 28} className="fill-primary-foreground/70 font-mono text-[9.5px] tracking-[0.12em]">
        ORQUESTRAÇÃO
      </text>
      <CoreSteps x={core.x + 16} y={core.y + 58} cols={1} />
      {ports.map((y) => (
        <g key={y}>
          <circle cx={core.x} cy={y} r={3} className="fill-background stroke-primary" strokeWidth={1.5} />
          <circle cx={right} cy={y} r={3} className="fill-background stroke-primary" strokeWidth={1.5} />
        </g>
      ))}

      <text x={W / 2} y={414} textAnchor="middle" className="fill-muted-foreground font-mono text-[9.5px] tracking-[0.12em]">
        DIAGRAMA ILUSTRATIVO
      </text>
    </svg>
  );
}

function Vertical() {
  const W = 340;
  const NW = 106;
  const NH = 40;
  const xs = [0, 117, 234];
  const core = { x: 60, y: 112, w: 220, h: 128 };
  const ports = [core.x + 50, core.x + 110, core.x + 170];
  const sources = ["E-mails", "APIs", "Planilhas"];
  const targets = ["Base de dados", "Tickets", "Relatórios"];
  const ty = 316;
  const bottom = core.y + core.h;

  return (
    <svg viewBox={`0 0 ${W} 384`} role="img" aria-label={ARIA} className="h-auto w-full">
      {sources.map((label, i) => {
        const x1 = xs[i] + NW / 2;
        return (
          <path
            key={label}
            d={`M${x1} ${8 + NH} C ${x1} ${80}, ${ports[i]} ${80}, ${ports[i]} ${core.y}`}
            className="flow-line fill-none stroke-primary/45"
            strokeWidth={1.5}
          />
        );
      })}
      {targets.map((label, i) => {
        const x2 = xs[i] + NW / 2;
        return (
          <path
            key={label}
            d={`M${ports[i]} ${bottom} C ${ports[i]} ${bottom + 36}, ${x2} ${ty - 36}, ${x2} ${ty}`}
            className="flow-line fill-none stroke-primary/45"
            strokeWidth={1.5}
          />
        );
      })}

      {sources.map((label, i) => (
        <g key={label}>
          <rect x={xs[i] + 0.75} y={8} width={NW - 1.5} height={NH} rx={8} className="fill-card stroke-border-strong" />
          <circle cx={xs[i] + 14} cy={8 + NH / 2} r={3.5} className="pulse-signal fill-signal" />
          <text x={xs[i] + 24} y={8 + NH / 2 + 4} className="fill-foreground font-mono text-[11.5px]">
            {label}
          </text>
        </g>
      ))}
      {targets.map((label, i) => (
        <g key={label}>
          <rect x={xs[i] + 0.75} y={ty} width={NW - 1.5} height={NH} rx={8} className="fill-card stroke-border-strong" />
          <rect x={xs[i] + 10} y={ty + NH / 2 - 4} width={8} height={8} rx={2} className="fill-primary" />
          <text x={xs[i] + 24} y={ty + NH / 2 + 4} className="fill-foreground font-mono text-[11px]">
            {label}
          </text>
        </g>
      ))}

      <rect x={core.x} y={core.y} width={core.w} height={core.h} rx={12} className="fill-primary" />
      <text x={core.x + 18} y={core.y + 30} className="fill-primary-foreground/70 font-mono text-[10px] tracking-[0.12em]">
        ORQUESTRAÇÃO
      </text>
      <CoreSteps x={core.x + 18} y={core.y + 66} cols={2} />
      {ports.map((x) => (
        <g key={x}>
          <circle cx={x} cy={core.y} r={3} className="fill-background stroke-primary" strokeWidth={1.5} />
          <circle cx={x} cy={bottom} r={3} className="fill-background stroke-primary" strokeWidth={1.5} />
        </g>
      ))}

      <text x={W / 2} y={380} textAnchor="middle" className="fill-muted-foreground font-mono text-[9.5px] tracking-[0.12em]">
        DIAGRAMA ILUSTRATIVO
      </text>
    </svg>
  );
}

export function HeroDiagram() {
  return (
    <>
      <div className="sm:hidden">
        <Vertical />
      </div>
      <div className="hidden sm:block">
        <Horizontal />
      </div>
    </>
  );
}
