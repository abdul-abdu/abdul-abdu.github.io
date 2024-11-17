"use client";

import Link from "next/link";
import { KBarSearchButton } from "./SearchBar";

const nav_links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 py-2 px-8">
        <div className=" flex gap-x-6">
          {nav_links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 hover:text-primary-500 border rounded-lg px-3 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <KBarSearchButton />
        </div>
      </nav>
    </header>
  );
}
