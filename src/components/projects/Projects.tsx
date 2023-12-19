import zimbaDesktop from "../../assets/img/zimbacine-desktop.png";
import zimbaMobile from "../../assets/img/zimbacine-mobile.png";

const projects = [
  {
    name: "Zimba",
    desktop_img: zimbaDesktop,
    mobile_img: zimbaMobile,
    description:
      "A Web app for checking the latest movies showing in Zambian cinemas that include to see the release date, casters, showtimes and even watching the movie trailer",
    web_link: "zimbacine.vercel.app",
    git_repo: "",
    tech_used: ["Svelte", "Tailwind CSS", "movie-showtimes-api"],
  },
  {
    name: "Zimba",
    desktop_img: zimbaDesktop,
    mobile_img: zimbaMobile,
    description:
      "A Web app for checking the latest movies showing in Zambian cinemas that include to see the release date, casters, showtimes and even watching the movie trailer",
    web_link: "zimbacine.vercel.app",
    git_repo: "",
    tech_used: ["Svelte", "Tailwind CSS", "movie-showtimes-api"],
  },
  {
    name: "Zimba",
    desktop_img: zimbaDesktop,
    mobile_img: zimbaMobile,
    description:
      "A Web app for checking the latest movies showing in Zambian cinemas that include to see the release date, casters, showtimes and even watching the movie trailer",
    web_link: "zimbacine.vercel.app",
    git_repo: "",
    tech_used: [
      "Svelte",
      "Tailwind CSS",
      "movie-showtimes-api",
      "Service-Worker",
    ],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section className="my-10">
      <h1 className="text-xl tracking-widest font-semibold">Recent Projects</h1>
      <div className="py-5">
        {projects.map((project) => (
          <div className="mb-10 py-4 border-2 border-transparent hover:border-stone-200/25 rounded-lg px-3 bg-transparent hover:filter hover:backdrop-blur hover:shadow-lg hover:shadow-stone-300/20">
            <aside className="relative mb-2 h-[15rem]  md:h-[20rem] rounded overflow-hidden shadow w-full">
              {/* Desktop image */}
              <img
                src={project.desktop_img}
                alt={project.name}
                className="w-[100%] h-full border-1 border-stone-300/40 shadow-lg left-0 object-contain rounded-md overflow-hidden absolute"
              />
              {/* Mobile image */}
              <img
                src={project.mobile_img}
                alt={project.name}
                className="object-contain border-2 absolute bottom-3 shadow-lg shadow-black/30 rounded-sm overflow-hidden w-[30%] right-2"
              />
            </aside>
            <section>
              <h1 className="font-black text-2xl py-2">{project.name}</h1>
              <p className="text-stone-700 text-sm">{project.description}</p>
              <small>
                <ul className="flex gap-2  flex-wrap mt-4">
                  {project.tech_used.map((lang) => (
                    <li className="py-1 px-2 font-extralight rounded-md shadow-lg filter backdrop-blur shadow-stone-300/40 bg-stone-900/70  text-teal-50">
                      {lang}
                    </li>
                  ))}
                </ul>
              </small>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
