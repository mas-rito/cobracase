import Image from "next/image"

import { ADVANTAGES_OF_OUR_PRODUCT, USER_IMAGES } from "@/constants"
import { Check, Star } from "lucide-react"

import { Phone } from "../molecules/phone"

const FirstGridn = () => {
  return (
    <div className="col-span-2 lg:pt-4">
      <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="absolute left-0 top-0 block w-20 md:w-28 lg:-top-20">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/50" />
          <Image
            alt="Snake logo"
            width={300}
            height={300}
            src="/snake-1.png"
            className="w-full"
          />
        </div>
        <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          Your Image on a{" "}
          <span className="bg-green-600 px-2 text-white">Custom</span> Phone
          Case
        </h1>
        <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
          Capture your favorite memories with your own,{" "}
          <span className="font-semibold">one-of-one</span> phone case.
          CaseCobra allows you to protect your memories, not just your phone
          case.
        </p>

        <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
          <div className="space-y-2">
            {ADVANTAGES_OF_OUR_PRODUCT.map((advantage, index) => (
              <li key={index} className="flex items-center gap-1.5 text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                {advantage}
              </li>
            ))}
          </div>
        </ul>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <div className="flex -space-x-4">
            {USER_IMAGES.map((image, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                src={image}
                alt={"user image " + index}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-between sm:items-start">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-green-600 text-green-600"
                  />
                ))}
            </div>

            <p>
              <span className="font-semibold">1.250</span> happy customers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SecondGridn = () => {
  return (
    <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
      <div className="relative md:max-w-xl">
        <Image
          alt="Your image"
          src="/your-image.png"
          width={200}
          height={200}
          className="absolute -right-6 -top-24 z-20 w-36 select-none md:-right-1/3"
        />
        <Image
          alt="Line"
          src="/line.png"
          width={100}
          height={100}
          className="absolute -bottom-6 -left-6 w-20 select-none"
        />
        <Phone
          className="w-64"
          imgSrc="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  )
}

export const HeroSection = () => {
  return (
    <section className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
      <FirstGridn />
      <SecondGridn />
    </section>
  )
}
