import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontJakartaSans.variable
)
