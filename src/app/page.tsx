"use client"
import Providers from "@/app/Providers"
import Particles from "@/components/Particles"
import { About, Footer, Navbar } from "@/sections"

export default function Home() {
  return (
    <Providers>
      <main>
        <Navbar />
        <About />
        <Footer />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={1000}
        />
      </main>
    </Providers>
  )
}
