function siteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv && /^https?:\/\//i.test(fromEnv)) {
    return fromEnv.replace(/\/$/, "")
  }
  return "https://ui.trophy.so"
}

export const siteConfig = {
  name: "Trophy UI",
  url: siteOrigin(),
  ogImage: `${siteOrigin()}/og.png`,
  title: "Trophy UI",
  description:
    "Trophy UI is an open-source library of in-app components for streaks, milestones, leaderboards, and points. Built on shadcn/ui and Tailwind CSS, ready to copy into any React app, and designed to work with Trophy, the 1:1 customer engagement platform.",
  keywords: [
    "in-app components",
    "in-app personalization",
    "in-app engagement components",
    "customer engagement UI",
    "retention UI components",
    "React component library",
    "Next.js components",
    "shadcn registry",
    "shadcn components",
    "Tailwind CSS components",
    "open source React components",
    "streak UI component",
    "streak tracker React",
    "milestone badge component",
    "achievement badge React",
    "leaderboard React component",
    "points UI component",
    "level progression UI",
    "habit tracking UI",
    "gamification UI kit",
    "gamification React components",
  ],
  links: {
    github: "https://github.com/trophyso/ui",
  },
  navItems: [
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
  ],
}

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || undefined

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
