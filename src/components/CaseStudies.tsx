import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { caseStudyHasImage, type CaseStudy, type ResultColor } from "@/data/caseStudies";

const caseStudyImageFrame =
  "relative aspect-[4/3] w-full max-h-[10.5rem] min-h-[6.5rem] shrink-0 overflow-hidden rounded-md sm:max-h-[12rem] sm:min-h-[7.5rem]";

const resultIconClasses: Record<ResultColor, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
};

const CaseStudyCard = ({ caseStudy, embedded = false }: { caseStudy: CaseStudy; embedded?: boolean }) => {
  const imageSrc = caseStudyHasImage(caseStudy.image) ? caseStudy.image.trim() : null;
  return (
  <Card
    className={`group flex w-full flex-col overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl ${embedded ? "h-auto" : "h-full flex-1"}`}
  >
    <div
      className={`grid min-h-0 grid-cols-1 gap-0 lg:grid-cols-3 lg:grid-rows-1 lg:items-stretch ${embedded ? "" : "flex-1"}`}
    >
      <div className={`min-h-0 min-w-0 lg:col-span-2 ${embedded ? "p-5 sm:p-6" : "p-8 sm:p-10"}`}>
        <CardHeader className={`p-0 ${embedded ? "mb-4" : "mb-6"}`}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <CardTitle
                className={`mb-2 font-display group-hover:-translate-y-1 transition-transform duration-300 ${embedded ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}
              >
                {caseStudy.business}
              </CardTitle>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">{caseStudy.type}</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className={`p-0 ${embedded ? "space-y-4" : "space-y-6"}`}>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-2">Challenge</h4>
            <p className="text-muted-foreground">{caseStudy.challenge}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-2">Solution</h4>
            <p className="text-muted-foreground">{caseStudy.solution}</p>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground italic mb-2">&ldquo;{caseStudy.quote}&rdquo;</p>
                <p className="text-sm text-muted-foreground font-mono">— {caseStudy.author}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </div>

      <div
        className={`flex min-h-0 min-w-0 flex-col border-t border-primary/25 bg-gradient-to-br from-primary/[0.09] via-primary/[0.04] to-secondary/[0.14] lg:h-full lg:self-stretch lg:border-l lg:border-t-0 lg:border-primary/30`}
      >
        <div
          className={`flex flex-1 flex-col justify-center gap-4 ${embedded ? "p-5 sm:p-6" : "gap-5 p-8 sm:p-10"}`}
        >
          <h4 className="font-display text-xl font-bold text-foreground">Results</h4>
          {imageSrc && (
            <div className={`${caseStudyImageFrame} bg-muted ring-1 ring-inset ring-border/60`}>
              <img
                src={imageSrc}
                alt={`${caseStudy.business} — site preview`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
            </div>
          )}
          <div
            className={`${embedded ? "space-y-4" : "space-y-6"} ${imageSrc ? "border-t border-primary/15 pt-4" : ""}`}
          >
            {caseStudy.results.map((result, resultIndex) => {
              const Icon = result.icon;
              const { bg, text } = resultIconClasses[result.color];
              return (
                <div key={resultIndex} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${text}`} />
                  </div>
                  <p className="font-semibold text-foreground">{result.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </Card>
  );
};

/** Seamless loop for duplicated track: scroll position stays in [0, half). */
function wrapScrollLeft(scrollLeft: number, half: number): number {
  if (half <= 0) return scrollLeft;
  let s = scrollLeft % half;
  if (s < 0) s += half;
  return s;
}

const LOOP_DURATION_MS = 55_000;

type CaseStudiesMarqueeProps = {
  cases: CaseStudy[];
  /** Lighter borders / spacing when sitting on the hero background */
  embedded?: boolean;
};

export const CaseStudiesMarquee = ({ cases, embedded = false }: CaseStudiesMarqueeProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragRef = useRef({ startX: 0, startScroll: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      const dx = e.shiftKey ? e.deltaY : e.deltaX !== 0 ? e.deltaX : e.deltaY;
      el.scrollLeft = wrapScrollLeft(el.scrollLeft + dx, half);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const el = scrollRef.current;
      if (el && !pausedRef.current && !draggingRef.current && !reducedMotion) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          const dt = now - last;
          const delta = (half / LOOP_DURATION_MS) * dt;
          el.scrollLeft = wrapScrollLeft(el.scrollLeft - delta, half);
        }
      }
      last = now;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    draggingRef.current = true;
    dragRef.current = { startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = wrapScrollLeft(dragRef.current.startScroll - dx, half);
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    scrollRef.current?.releasePointerCapture(e.pointerId);
  }, []);

  const marqueeCases = [...cases, ...cases];

  const stripClass = embedded
    ? "w-full max-w-full overflow-x-clip py-2 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
    : "w-full overflow-hidden border-y border-border/60 py-8 sm:py-10 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]";

  return (
    <div
      className={stripClass}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={scrollRef}
        role="region"
        aria-label="Success stories carousel"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`w-full cursor-grab touch-pan-x overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${embedded ? "" : "overflow-y-hidden"}`}
      >
        <div
          className={`flex w-max pl-4 sm:pl-6 lg:pl-8 ${embedded ? "items-start gap-5 sm:gap-6" : "items-stretch gap-8"}`}
        >
          {marqueeCases.map((caseStudy, index) => (
            <div
              key={`${caseStudy.business}-${index}`}
              className={`flex shrink-0 ${embedded ? "w-[min(92vw,52rem)]" : "w-[min(92vw,72rem)] self-stretch"}`}
            >
              <CaseStudyCard caseStudy={caseStudy} embedded={embedded} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

