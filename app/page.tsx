import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
