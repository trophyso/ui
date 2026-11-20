"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { MilestoneBadge } from "@/components/ui/milestone-badge"

// Types (inlined - only fields used by this component)
interface Milestone {
  id: string
  name: string
  trigger: "metric" | "api" | "streak"
  badgeUrl?: string | null
  progress?: number
  rarity?: number
}

interface UserMilestone extends Milestone {
  achievedAt: string | null // null = locked
}

// Variants
const milestoneGridVariants = cva("grid", {
  variants: {
    columns: {
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      auto: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    },
    gap: {
      sm: "gap-2",
      default: "gap-4",
      lg: "gap-6",
    },
  },
  defaultVariants: {
    columns: "auto",
    gap: "default",
  },
})

// Badge size mapping
// Props
interface MilestoneGridProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof milestoneGridVariants> {
  /** Array of milestones */
  milestones: UserMilestone[]
  /** Size of milestone badges */
  badgeSize?: "sm" | "default" | "lg"
  /** Callback when milestone clicked */
  onMilestoneClick?: (milestone: UserMilestone) => void
}

const MilestoneGrid = React.forwardRef<HTMLDivElement, MilestoneGridProps>(
  (
    {
      className,
      columns,
      gap,
      milestones,
      badgeSize = "default",
      onMilestoneClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="list"
        aria-label="Milestones"
        className={cn(milestoneGridVariants({ columns, gap }), className)}
        {...props}
      >
        {milestones.map((milestone) => {
          return (
            <MilestoneBadge
              key={milestone.id}
              milestone={milestone}
              badgeSize={badgeSize}
              onMilestoneClick={onMilestoneClick}
            />
          )
        })}
      </div>
    )
  }
)
MilestoneGrid.displayName = "MilestoneGrid"

export { MilestoneGrid, milestoneGridVariants }
export type { MilestoneGridProps, Milestone, UserMilestone }
