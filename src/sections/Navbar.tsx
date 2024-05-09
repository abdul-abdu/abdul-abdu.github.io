import { ArrowUpButton, ScrollLink, ThemeToggler } from "@/components"
import { IDS } from "@/constants"

const ITEMS = [
  {
    id: 1,
    title: "About",
    href: `#${IDS.ABOUT}`,
  },
  {
    id: 2,
    title: "Experience",
    href: `#${IDS.EXPERIENCE}`,
  },
  {
    id: 3,
    title: "Projects",
    href: `#${IDS.PROJECTS}`,
  },
  {
    id: 4,
    title: "Contact",
    href: `#${IDS.FOOTER}`,
  },
]

export default function Navbar() {
  return (
    <>
      <nav className="w-full py-4 font-mono">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex w-full justify-between align-baseline">
              <div className="flex">
                {ITEMS.map((item) => (
                  <ScrollLink
                    key={item.id}
                    className="flex justify-center p-2 text-sm md:text-lg"
                    href={item.href}
                  >
                    {item.title}
                  </ScrollLink>
                ))}
              </div>

              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
      <ArrowUpButton
        className="fixed bottom-0 right-0 m-3"
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0 })
        }}
      />
    </>
  )
}
