import Image from "next/image"

import { USER_IMAGES } from "@/constants"
import { Check } from "lucide-react"

import { Icons } from "../atoms/icons"
import { Stars } from "../atoms/stars"
import { Reviews } from "../molecules/review"

export const TestimonialSection = () => {
  return (
    <section className="grainy-dark bg-slate-100 py-16">
      <div className="container flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
            </span>{" "}
            say
          </h2>
          <Image
            alt="Snake logo"
            width={300}
            height={300}
            src="/snake-2.png"
            className="order-0 w-24 lg:order-2"
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <Stars className="mb-2" />
            <div className="text-lg leading-8">
              <p>
                &ldquo;The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
                <span className="bg-slate-800 p-0.5 text-white">
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it.&rdquo;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                width={100}
                height={100}
                className="h-12 w-12 rounded-full object-cover"
                src={USER_IMAGES[0]}
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Jonathan</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <Stars className="mb-2" />
            <div className="text-lg leading-8">
              <p>
                &ldquo;I usually keep my phone together with my keys in my
                pocket and that led to some pretty heavy scratchmarks on all of
                my last phone cases. This one, besides a barely noticeable
                scratch on the corner,{" "}
                <span className="bg-slate-800 p-0.5 text-white">
                  looks brand new after about half a year
                </span>
                . I dig it.&rdquo;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                width={100}
                height={100}
                className="h-12 w-12 rounded-full object-cover"
                src={USER_IMAGES[1]}
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Josh</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  )
}
