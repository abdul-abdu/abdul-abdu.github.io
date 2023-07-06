import { IDS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
const PROJECTS = [
  {
    name: "Store",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/c_thumb,w_250,g_face/v1618141763/Projects/solo-capstone_oq00tj.png",
    liveUrl: "https://e-commerce-client.netlify.app/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/grocery-store-frontend",
    beUrl: "https://github.com/abdugaffor-abdurahimov/grocery-store-backend",
    description:
      "E-commerce project, Features: Login, Register, login with tokens, buy a product. Sending email with dinamically created html attachment.",
    usedTechs: [
      "React",
      "Node.Js",
      "Express",
      "MongoDb",
      "Material UI",
      "HTML",
      "Css",
      "Admin Bro",
    ],
  },
  {
    name: "Book Store",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616258949/Projects/Screenshot_from_2021-03-20_21-48-48_bfwioh.png",
    liveUrl: "https://books-store-new.netlify.app/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/book-store-frontend",
    beUrl: "https://github.com/abdugaffor-abdurahimov/book-store-backend",
    description:
      "Book Store. Features: Login, Register, login with tokens, infinite scrolling implemented.",
    usedTechs: ["React", "Node.Js", "Express", "MongoDb", "Bootstrap"],
  },
  {
    name: "Netflix Clone",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616257750/Projects/Screenshot_from_2021-03-20_21-26-46_xwsynt.png",
    liveUrl: "https://react-netflix-clone-strive.herokuapp.com/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/netflix-clone-frontend",
    beUrl: "https://github.com/abdugaffor-abdurahimov/netflix-clone-backend",
    description: "Netflix Clone. Features: Search for movies, post a comments,",
    usedTechs: ["Bootstrap", "React", "Node.Js", "Express"],
  },

  {
    name: "Benchmark Assessment App",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616259255/Projects/Screenshot_from_2021-03-20_21-51-56_ryonzz.png",
    liveUrl: "https://benchmark-platform-frontend.vercel.app/",
    feUrl:
      "https://github.com/abdugaffor-abdurahimov/benchmark-platform-frontend",
    beUrl:
      "https://github.com/abdugaffor-abdurahimov/benchmark-platform-backend",
    description:
      "Benchmark Assessment Platform. Features: Timer Implemented, Generate 5 random questions, ",
    usedTechs: ["Material UI", "React", "Node.JS", "Express"],
  },
  {
    name: "Spotify Clone",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616259747/Projects/Screenshot_from_2021-03-20_22-02-09_gxijaf.png",
    liveUrl: "https://spotify-clone-chi.vercel.app/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/spotify-clone-react",
    beUrl: "https://github.com/abdugaffor-abdurahimov/spotify-backend",
    description:
      "Spotify Clone React. Features: listen to music, play/pause, login and registration, login with tokens, login with google, user authentication, protected routes",
    usedTechs: ["Bootstrap", "React", "Node.JS", "Express", "Redux"],
  },

  {
    name: "Jobs Search Engine",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616259261/Projects/Screenshot_from_2021-03-20_21-51-32_m7uyyq.png",
    liveUrl: "https://jobs-search-engine.herokuapp.com/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/jobs-search-engine",
    beUrl: null,
    description:
      "Jobs Search Engine. Using Github Jobs API. Features: Search for a list. Compare jobs",
    usedTechs: ["Material UI", "React"],
  },

  {
    name: "Spotify Clone",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616259992/Projects/Screenshot_from_2021-03-20_22-06-00_fzlee1.png",
    liveUrl: "https://abdugaffor-abdurahimov.github.io/spotify-clone-js/",
    feUrl: "https://github.com/abdugaffor-abdurahimov/spotify-clone-react",
    beUrl: null,
    description:
      "Spotify Clone with pure JavaScript. Features: listen to music, play/pause",
    usedTechs: ["JavaScript", "Bootstrap"],
  },
  {
    name: "WhatsApp",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616265874/Projects/Screenshot_from_2021-03-20_23-44-13_bv3iwl.png",
    liveUrl: "https://bw4-whatsapp-frontend-dzkoga7jg-nostam.vercel.app/login",
    feUrl: "https://github.com/nostam/bw4-whatsapp-frontend",
    beUrl: "https://github.com/nostam/bw4-whatsapp-backend",
    description:
      "WhatsApp Clone team project. Features: chat - socketio, user CRUD, search for users, send a message, create a new room.",
    usedTechs: [
      "SocketIo",
      "Express",
      "React",
      "Node.JS",
      "Bootstrap",
      "Material UI",
    ],
  },

  {
    name: "Linkedin",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616260886/Projects/Screenshot_from_2021-03-20_22-21-09_ypgyju.png",
    liveUrl: null,
    feUrl: "https://github.com/abdugaffor-abdurahimov/linkedin-ui-team-project",
    beUrl: "https://github.com/abdugaffor-abdurahimov/linkedin-backend",
    description:
      "Linkedin Clone team project. Features: chat - socketio, user CRUD, search for users, post CRUD, comments CURD",
    usedTechs: ["SocketIo", "Express", "React", "Node.JS", "Bootstrap"],
  },

  {
    name: "Wheather App",
    img: "https://res.cloudinary.com/duq2fqsvm/image/upload/w_250,ar_16:9,c_fill,g_auto,e_sharpen/v1616260495/Projects/Screenshot_from_2021-03-20_22-14-32_jump54.png",
    liveUrl: null,
    feUrl: "https://github.com/abdugaffor-abdurahimov/weather-app",
    beUrl: null,
    description: "Search by Location",
    usedTechs: ["React", "Material UI"],
  },
]

export default function Projects() {
  return (
    <section id={IDS.PROJECTS} className="p-3 my-5">
      <section className="projects" id="projects">
        <div className="content-wrap">
          <h3>Some of my projects</h3>

          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="py-10 border-b-2 border-dashed border-gray-400 overflow-hidden"
            >
              {project.liveUrl && (
                <Link href={project.liveUrl}>
                  <img
                    className="float-left mr-3 my-3"
                    src={project.img}
                    alt="img"
                  />
                </Link>
              )}
              <div>
                <h5>{project.name}</h5>
                <p>{project.description}</p>
              </div>

              {project.usedTechs.map((usedTech, idx) => (
                <img
                  className="m-1"
                  key={idx}
                  src={`https://img.shields.io/badge/${usedTech}-informational?style=flat&logo=${usedTech}&logoColor=pink`}
                  alt={"usedTech-badge"}
                />
              ))}

              <div>
                <a
                  className="mx-2 font-medium text-blue-500 dark:text-blue-400 hover:underline"
                  href={project.feUrl}
                >
                  Github frontend
                </a>
                {project.beUrl && (
                  <Link
                    className="mx-2 font-medium text-blue-500 dark:text-blue-400 hover:underline"
                    href={project.beUrl}
                  >
                    Github backend
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    className="mx-2 font-medium text-blue-500 dark:text-blue-400 hover:underline"
                    href={project.liveUrl}
                  >
                    See Live
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
