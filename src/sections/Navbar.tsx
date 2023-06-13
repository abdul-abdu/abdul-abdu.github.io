import { ArrowUpButton, ScrollLink, ThemeToggler } from "@/components"
import { IDS } from "@/constants"

const ITEMS = [
  {
    id: 1,
    title: "About",
    href: `#${IDS.ABOUT}`,
  },
]

export default function Navbar() {
  return (
    <nav className="bg-transparent w-full top-0 py-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex w-full justify-between align-baseline">
            <div className="flex space-x-4s">
              {ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  className="px-3 text-sm font-medium"
                  href={item.href}
                >
                  {item.title}
                </ScrollLink>
              ))}
              <ScrollLink
                className="px-3 text-sm font-medium"
                href={`#${IDS.FOOTER}`}
              >
                Contact
              </ScrollLink>
            </div>
            <ThemeToggler />

            <ArrowUpButton
              className="fixed bottom-0 right-0 m-3"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 0 })
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
