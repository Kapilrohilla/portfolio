"use client";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const CircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative h-20 w-20 overflow-hidden rounded-full bg-primary_green flex justify-center items-center`,
      className
    )}
    {...props}
    style={{
      background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(green ${value || 0}%, bg-[#eee] 0)`,
    }}
  >
    <div className="">{`${value || 0}%`}</div>
  </ProgressPrimitive.Root>
));

CircleProgress.displayName = ProgressPrimitive.Root.displayName;
export default CircleProgress;
