import { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { HomeComponentMosaic } from "@/components/home-component-mosaic"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/trophy/ui/button"

export const dynamic = "force-static"
export const revalidate = false

const homeTitle = `${siteConfig.title} — Open-Source In-App Components for React`

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: homeTitle,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: homeTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImage }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description: siteConfig.description,
  url: siteConfig.url,
  keywords: siteConfig.keywords.join(", "),
  featureList: [
    "Streak tracking components",
    "Milestone badges, cards and celebrations",
    "Leaderboard rankings and podiums",
    "Points displays and level systems",
    "Built on shadcn/ui and Tailwind CSS for React and Next.js",
    "Install with the shadcn CLI from this open registry",
    "Fully customizable and open source",
  ],
  softwareHelp: {
    "@type": "CreativeWork",
    url: `${siteConfig.url}/docs`,
  },
  author: {
    "@type": "Organization",
    name: "Trophy",
    url: "https://trophy.so",
  },
}

const categories = [
  {
    title: "Streak components",
    description:
      "Build robust usage habits with daily streaks, streak calendars, and streak badges that give users a reason to come back every day.",
    href: "/docs/components/streak-card",
    components: ["Streak Card", "Streak Calendar", "Streak Badge"],
  },
  {
    title: "Milestone components",
    description:
      "Celebrate user progress with milestone badges, grids, lists, and unlock moments. Give users a clear sense of how far they've come.",
    href: "/docs/components/milestone-badge",
    components: [
      "Milestone Badge",
      "Milestone Card",
      "Milestone Grid",
      "Milestone List",
      "Milestone Unlocked",
    ],
  },
  {
    title: "Leaderboard components",
    description:
      "Create friendly competition with leaderboard rankings, podium displays, and leaderboard cards. Show users where they stand among their peers.",
    href: "/docs/components/leaderboard-rankings",
    components: [
      "Leaderboard Rankings",
      "Leaderboard Podium",
      "Leaderboard Card",
    ],
  },
  {
    title: "Points & levels components",
    description:
      "Turn in-app actions into progress with points totals, activity feeds, boosts, charts, and levels. Build complete progression systems.",
    href: "/docs/components/points-badge",
    components: [
      "Points Badge",
      "Points Awards",
      "Points Boost",
      "Points Chart",
      "Points Levels List",
      "Points Levels Timeline",
    ],
  },
]

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 25%, hsl(var(--background) / 0.5) 50%, hsl(var(--background) / 0.8) 70%, hsl(var(--background) / 0.95) 85%, hsl(var(--background)) 95%)",
          }}
        />
        <PageHeader className="relative z-10">
          <PageHeaderHeading className="max-w-4xl">
            UI Components For In-App Experiences
          </PageHeaderHeading>
          <PageHeaderDescription>
            {siteConfig.description}
          </PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Star className="size-4" />
                Star on GitHub
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href="/docs">Get started</Link>
            </Button>
          </PageActions>
        </PageHeader>
        <HomeComponentMosaic />
      </div>
      <section className="container-wrapper">
        <div className="container mx-auto max-w-3xl px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            In-app components for React
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Trophy UI gives you production-ready in-app components — streak
            trackers, milestone badges, leaderboards, points displays, and more.
            Built on{" "}
            <Link href="https://ui.shadcn.com" className="underline">
              shadcn/ui
            </Link>{" "}
            and Tailwind CSS, every component is open source, fully
            customizable, and installs with a single CLI command into any React
            or Next.js project.
          </p>
        </div>
      </section>
      <section className="container-wrapper border-grid border-t">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need to ship in-app experiences
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-center text-base sm:text-lg">
            Four categories of components covering the in-app experiences that
            keep users coming back — all composable, accessible, and
            theme-aware.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="border-border hover:border-foreground/20 group rounded-xl border p-6 transition-colors"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.components.map((component) => (
                    <span
                      key={component}
                      className="bg-secondary text-secondary-foreground rounded-md px-2 py-0.5 text-xs"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container-wrapper border-grid border-t">
        <div className="container mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Built for developers
          </h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">One-command install</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Add any component to your project with a single CLI command. No
                extra dependencies to manage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Fully customizable</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Every component lives in your codebase. Tweak styles, layout,
                and behavior to match your brand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Open source</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                MIT licensed and community-driven. Use in personal projects or
                production apps without restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
