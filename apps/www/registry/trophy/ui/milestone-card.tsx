"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MilestoneBadge } from "@/components/ui/milestone-badge"
import { MilestoneList } from "@/components/ui/milestone-list"

interface Milestone {
  id: string
  name: string
  description?: string | null
  trigger: "metric" | "api" | "streak"
  badgeUrl?: string | null
  progress?: number
  rarity?: number
}

interface UserMilestone extends Milestone {
  achievedAt: string | null
}

interface MilestoneCardProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: UserMilestone[]
  highlightedMilestones: UserMilestone[]
  badgeSize?: "sm" | "default" | "lg"
  lockedStyle?: "grayscale" | "silhouette" | "hidden"
  onMilestoneClick?: (milestone: UserMilestone) => void
}

const MilestoneCard = React.forwardRef<HTMLDivElement, MilestoneCardProps>(
  (
    {
      className,
      milestones,
      highlightedMilestones,
      badgeSize = "default",
      lockedStyle = "grayscale",
      onMilestoneClick,
      ...props
    },
    ref
  ) => {
    const unlockedCount = milestones.filter((a) => a.achievedAt !== null).length

    return (
      <div
        ref={ref}
        className={cn("bg-card rounded-2xl border p-6 shadow-sm", className)}
        {...props}
      >
        <div className="text-center">
          <p className="text-7xl font-bold tracking-tight sm:text-8xl">
            {unlockedCount}
          </p>
          <p className="text-muted-foreground mt-1 text-sm font-medium">
            Badges Unlocked
          </p>
        </div>

        <div className="mt-10 flex items-end justify-center gap-4">
          {highlightedMilestones.slice(0, 3).map((milestone, index) => (
            <MilestoneBadge
              key={milestone.id}
              milestone={milestone}
              badgeSize="sm"
              onMilestoneClick={onMilestoneClick}
              className={cn(
                "w-28 border-0 bg-transparent p-0 shadow-none hover:shadow-none",
                index === 1 ? "-translate-y-2" : "translate-y-1"
              )}
            />
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-primary text-sm font-medium">All Milestones</h3>
            <Button variant="link" size="sm" onClick={() => {}}>
              See all
            </Button>
          </div>
          <MilestoneList
            milestones={milestones}
            badgeSize={badgeSize}
            lockedStyle={lockedStyle}
            onMilestoneClick={onMilestoneClick}
          />
        </div>
      </div>
    )
  }
)
MilestoneCard.displayName = "MilestoneCard"

export { MilestoneCard }
export type { MilestoneCardProps, Milestone, UserMilestone }
