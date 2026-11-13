import { Funnel_Display, Funnel_Sans, Geist_Mono } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable
)
