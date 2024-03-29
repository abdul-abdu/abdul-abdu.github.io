import { IDS } from "@/constants"
import Image from "next/image"

export default function About() {
  return (
    <section id={IDS.ABOUT} className="p-5 font-serif text-lg">
      <div className="flex justify-around mt-10 flex-wrap">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="my-image"
          width={400}
          height={400}
        />
        <div className="ml-5 max-w-2xl">
          <p className="font-sans text-2xl">Hello, Im</p>
          <h3 className="text-5xl animate__animated animate__bounce">
            Abdug'affor Abdurakhimov
          </h3>
          <p className="text-2xl my-2">you can call me Abdul</p>
          <p>
            I'm a passionate and experienced React, Next.js, and React Native
            Developer with over 3 years of expertise in creating robust and
            scalable web and mobile applications.
          </p>
        </div>
      </div>
      <h4>Who am I ?</h4>
      <br />

      <p>
        <span>
          🚀 I thrive in dynamic and collaborative environments, working closely
          with clients to transform their ideas into reality. I specialize in
          leveraging the power of React and its ecosystem to deliver exceptional
          user experiences.
        </span>
      </p>
      <br />

      <p>
        <span>✨ What sets me apart:</span>
      </p>

      <ul>
        <li>
          <span>
            💡 React Mastery: With a deep understanding of React, I create
            interactive and high-performance user interfaces that captivate and
            engage users. I stay up to date with the latest developments in the
            React world to ensure I'm always at the forefront of technology.
          </span>
        </li>
        <li>
          <span>
            📱 Cross-Platform Excellence: As a React Native developer, I excel
            at building cross-platform mobile applications that deliver
            consistent experiences across iOS and Android platforms. I have a
            keen eye for UI/UX design, creating intuitive and visually appealing
            mobile solutions.
          </span>
        </li>
        <li>
          <span>
            🌐 Next-level Next.js Development: I harness the power of Next.js to
            build lightning-fast and SEO-friendly web applications. By utilizing
            server-side rendering and static site generation, I ensure optimal
            performance and user experience.
          </span>
        </li>
      </ul>

      <br />
      <p>
        <span>🔧 Services I offer:</span>
      </p>
      <ul>
        <li>
          <span>
            ✅ Developing responsive and dynamic web applications using React
            and Next.js
          </span>
        </li>
        <li>
          <span>✅ Building cross-platform mobile apps with React Native</span>
        </li>
        <li>
          <span>
            ✅ Integrating APIs and third-party libraries to enhance application
            functionality
          </span>
        </li>
        <li>
          <span>✅ Optimizing application performance and scalability</span>
        </li>
        <li>
          <span>
            ✅ Collaborating with UI/UX designers and backend developers to
            deliver exceptional solutions
          </span>
        </li>
      </ul>
      <br />
    </section>
  )
}
