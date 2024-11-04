"use client"
import Particles from "@/components/Particles"
import { About, Experience, Footer, Navbar, Projects } from "@/sections"

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Navbar />
      <About />
      <Experience />
      <Footer />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
    </main>
  )
}
