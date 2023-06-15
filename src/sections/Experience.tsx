import { IDS } from "@/constants"
import Image from "next/image"
import { ReactNode } from "react"

const EXPERIENCES = [
  {
    current: true,
    company: {
      name: "DanAds",
      logo: "/danads.png",
    },
    startDate: "Apr 2023",
    endDate: "Present",
    role: "Frontend developer",
    duties: ["- Developing NextJs application"],
  },
  {
    company: {
      name: "Bilim Makon",
      logo: "/bilimmakon.jpeg",
    },
    startDate: "Aprl 2023",
    endDate: "Feb 2023",
    role: "Frontend developer",
    duties: [
      "- Developed ReactJs kindergarten web app (Currently has more than 20k active users in Uzbekistan)",
      '- Created React Native face attendance system mobile app (Helped Uzbekistan government to save "XXX" amount of money by using Face Attendance System)',
    ],
  },
  {
    company: {
      name: "InoviaAi",
      logo: "/inovia.jpeg",
    },
    startDate: "May 2021",
    endDate: "Jan 2023",
    role: "Frontend developer",
    duties: [
      "- Developed ReactJs applications.",
      "- Migrated JS legacy code to TS.",
      "- Optimized webpack configs, build, load times, etc...",
      "- Contributed to CI/CD pipelines",
      "- Created React-Native apps",
      "- Developed end-to-end test cases with cypress",
    ],
  },
]

export default function Experience() {
  return (
    <section id={IDS.EXPERIENCE} className="m-10">
      <h2 className="text-lg">Work Experience</h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {EXPERIENCES.map((e) => (
          <ExperienceItem
            current={e.current}
            key={e.company.name}
            title={`${e.role} ${e.company.name}`}
            startDate={e.startDate}
            endDate={e.endDate}
            image={e.company.logo}
          >
            <ul>
              {e.duties.map((d, idx) => (
                <li key={`${idx}-${d}`}>{d}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))}
      </ol>
    </section>
  )
}

function ExperienceItem({
  title,
  startDate,
  endDate,
  children,
  image,
  current,
}: {
  current?: boolean
  title: string
  startDate: string
  endDate: string
  children: ReactNode
  image: string
}) {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5">
        <Image
          className="rounded-full"
          src={image}
          width={40}
          height={40}
          alt="danads_logo"
        />
      </span>
      <div className="ml-5 my-5">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title} <small className="ml-1">(Full-time)</small>
          {current ? (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Current
            </span>
          ) : (
            <></>
          )}
        </h3>

        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {startDate} - {endDate}
        </time>
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {children}
        </div>
      </div>
    </li>
  )
}
