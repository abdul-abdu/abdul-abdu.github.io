import { ScrollLink } from "@/components";
import { IDS } from "@/constants";

const ITEMS = [
  {
    id: 1,
    title: "About",
    href: `#${IDS.ABOUT}`,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-500 w-full sticky top-0 py-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex w-full justify-start">
            <div className="flex space-x-4s">
              {ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  className="text-white rounded-md px-3 py-2 text-sm font-medium bg-sky-500 mx-2"
                  href={item.href}
                >
                  {item.title}
                </ScrollLink>
              ))}
            </div>
            <div className="flex space-x-4s">
              <ScrollLink
                className="shadow-indigo-500/50 bg-green-400 rounded p-2 space-x-4s"
                href={`#${IDS.FOOTER}`}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
