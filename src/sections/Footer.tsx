import { IDS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const LINKS = [
  {
    link: "https://www.linkedin.com/in/abdul-abdu/",
    icon: `/linkedin.svg`,
    name: "linkedin",
  },
  {
    link: "https://stackoverflow.com/users/12525065/abdugaffor-abdurahimov",
    icon: `/stackoverflow.svg`,
    name: "stackoverflow",
  },
  {
    link: "https://github.com/abdul-abdu",
    icon: `/github.svg`,
    name: "github",
    className: "bg-white rounded",
  },
  {
    link: "https://www.hackerrank.com/abdugaffor",
    icon: `/hackerrank.svg`,
    name: "hakerrank",
  },
  {
    link: "https://leetcode.com/abdugaffor/",
    icon: `/leetcode.svg`,
    name: "leetcode",
  },
  {
    link: "https://t.me/AbdugafforAbdurahimov",
    icon: "/telegram.svg",
    name: "telegram",
  },
  {
    link: "mailto:abdugaffor.abdurakhimov@gmail.com",
    icon: "/gmail.svg",
    name: "gmail",
  },
]

export default function Footer() {
  return (
    <footer id={IDS.FOOTER} className="mt-1000">
      <div className="flex justify-center my-100">
        {LINKS.map(({ icon, link, name, className }) => (
          <Link href={link} key={name} className="mx-1" target="_blank">
            <Image
              src={icon}
              width={35}
              height={35}
              alt={name}
              priority
              className={className}
            />
          </Link>
        ))}
      </div>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <small className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy;{new Date().getFullYear()}
            <a href="#"> Abdugaffor Abdurakhimov</a>. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
