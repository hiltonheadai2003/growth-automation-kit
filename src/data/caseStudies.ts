import type { LucideIcon } from "lucide-react";
import {
  BarChart2,
  Calendar,
  Clock,
  MessageSquare,
  Phone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import raw from "./case-studies.json";

/**
 * Add a new story by appending an object to the "cases" array in case-studies.json.
 *
 * Fields: business, type, challenge, solution, quote, author, results[]
 * Optional "image" (Results column):
 *   • Non-empty path → screenshot above metrics. File must live under public/ (e.g. public/photo.jpg → use "/photo.jpg").
 *   • You can write "case-studies/x.png" or "/case-studies/x.png" — a leading slash is added if missing.
 *   • Omit "image" (or "" / whitespace) → results-only column.
 *   Examples: "/placeholder.svg", "/data/case-studies-images/your-shot.png"
 *
 * Each result: { "icon": "<slug>", "label": "...", "color": "primary" | "secondary" | "accent" }
 *
 * Icon slugs: clock, trending-up, users, calendar, phone, message, zap, chart
 */
const ICON_MAP: Record<string, LucideIcon> = {
  clock: Clock,
  "trending-up": TrendingUp,
  users: Users,
  calendar: Calendar,
  phone: Phone,
  message: MessageSquare,
  zap: Zap,
  chart: BarChart2,
};

const DEFAULT_ICON = Clock;

export type ResultColor = "primary" | "secondary" | "accent";

export type CaseStudyResult = {
  icon: LucideIcon;
  label: string;
  color: ResultColor;
};

export type CaseStudy = {
  business: string;
  type: string;
  challenge: string;
  solution: string;
  quote: string;
  author: string;
  /** Public URL when you want a site screenshot above Results; omit for results-only column */
  image?: string;
  results: CaseStudyResult[];
};

type CaseStudyResultJson = {
  icon: string;
  label: string;
  color: string;
};

type CaseStudyJson = {
  business: string;
  type: string;
  challenge: string;
  solution: string;
  quote: string;
  author: string;
  image?: string;
  results: CaseStudyResultJson[];
};

type CaseStudiesFile = { cases: CaseStudyJson[] };

function normalizeColor(c: string): ResultColor {
  if (c === "secondary" || c === "accent") return c;
  return "primary";
}

/** Public asset paths must resolve from site root (Vite serves `public/` at `/`). */
function normalizeCaseStudyImagePath(raw: string): string | undefined {
  const s = raw.trim();
  if (!s) return undefined;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;
  return `/${s}`;
}

function normalizeCaseStudies(data: CaseStudiesFile): CaseStudy[] {
  return (data.cases ?? []).map((c) => {
    const imageRaw = typeof c.image === "string" ? c.image.trim() : "";
    const image = imageRaw ? normalizeCaseStudyImagePath(imageRaw) : undefined;
    return {
    business: c.business,
    type: c.type,
    challenge: c.challenge,
    solution: c.solution,
    quote: c.quote,
    author: c.author,
    ...(image ? { image } : {}),
    results: (c.results ?? []).map((r) => ({
      icon: ICON_MAP[String(r.icon ?? "").toLowerCase()] ?? DEFAULT_ICON,
      label: r.label,
      color: normalizeColor(r.color),
    })),
  };
  });
}

export const caseStudies: CaseStudy[] = normalizeCaseStudies(raw as CaseStudiesFile);

/** True when JSON has a real image URL → render screenshot above Results. */
export function caseStudyHasImage(image: string | undefined): image is string {
  return typeof image === "string" && image.trim().length > 0;
}
