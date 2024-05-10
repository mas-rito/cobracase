import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

type StarsProps = {
  className?: string
}
export const Stars = ({ className }: StarsProps) => {
  return (
    <div className={cn("flex gap-x-0.5", className)}>
      <Star className="h-5 w-5 fill-green-600 text-green-600" />
      <Star className="h-5 w-5 fill-green-600 text-green-600" />
      <Star className="h-5 w-5 fill-green-600 text-green-600" />
      <Star className="h-5 w-5 fill-green-600 text-green-600" />
      <Star className="h-5 w-5 fill-green-600 text-green-600" />
    </div>
  )
}
