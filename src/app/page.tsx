import { HeroSection } from "@/components/oragnisms/heroSection"
import { HowToSection } from "@/components/oragnisms/howToSection"
import { TestimonialSection } from "@/components/oragnisms/testimonialSection"

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <TestimonialSection />
      <HowToSection />
    </main>
  )
}
