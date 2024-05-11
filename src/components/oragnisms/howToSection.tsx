import Image from "next/image"
import Link from "next/link"

import { ADVANTAGES_OF_OUR_PRODUCT } from "@/constants"
import { ArrowRight, Check } from "lucide-react"

import { Phone } from "../molecules/phone"
import { buttonVariants } from "../ui/button"

export const HowToSection = () => {
  const image =
    "https://images.pexels.com/photos/954720/pexels-photo-954720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <section className="container py-24">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
            Upload your photo and get{" "}
            <span className="relative bg-green-600 px-2 text-white">
              your own case
            </span>{" "}
            now
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
          <Image
            alt="Arrow"
            width={100}
            height={100}
            src="/arrow.png"
            className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
          />

          <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
            <Image
              alt="Horse"
              width={300}
              height={300}
              src={image}
              className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>

          <Phone className="w-60" imgSrc={image} />
        </div>
      </div>

      <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
        {ADVANTAGES_OF_OUR_PRODUCT.map((advantage, index) => (
          <li key={index} className="w-fit">
            <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
            {advantage}
          </li>
        ))}

        <div className="flex justify-center">
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mx-auto mt-8",
            })}
            href="/configure/upload"
          >
            Create your case now <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </ul>
    </section>
  )
}
