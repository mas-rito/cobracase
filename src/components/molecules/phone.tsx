import Image from "next/image"

import { cn } from "@/lib/utils"

type Props = {
  imgSrc: string
  dark?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Phone = ({ imgSrc, dark, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-10 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        width={500}
        height={500}
        className="pointer-events-none select-none"
        alt="phone image"
      />

      <div className="absolute inset-0 -z-10">
        <Image
          width={500}
          height={500}
          className="min-h-full min-w-full object-cover"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  )
}
