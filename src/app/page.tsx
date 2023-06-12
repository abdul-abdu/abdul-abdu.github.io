"use client"
import Providers from "@/app/Providers"
import { About, Footer, Navbar } from "@/sections"

export default function Home() {
  return (
    <Providers>
      <main>
        <Navbar />
        <About />
        <Footer />
      </main>
    </Providers>
  )
}
