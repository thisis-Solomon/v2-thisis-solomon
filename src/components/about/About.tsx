const skills = [
  {
    title: "Languages",
    stacks: ["Javascript", "Typescript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    stacks: ["React", "Svelte", "Vue", "Node", "Express", "Tailwind CSS"],
  },
  {
    title: "Tools",
    stacks: ["Bash", "Git & GitHub", "NPM", "MongoDB", "Firebase"],
  },
  { title: "Design", stacks: ["Figma"] },
];

export default function About(): JSX.Element {
  return (
    <section>
      <h1 className="uppercase mb-5 font-semibold tracking-widest text-xl">
        About
      </h1>
      <p className="text-gray-700 text-base mb-4">
        A passionate and skilled frontend software developer with a focus on
        building user-friendly and responsive web applications.
      </p>
      <div className="relative">
        <h1 className="absolute tracking-widest leading-10 text-6xl opacity-10 font-bold text-stone-400 -z-10 uppercase">
          Skills
        </h1>
        {skills.map((skill) => (
          <div className="flex gap-2 pt-5 flex-col " key={skill.title}>
            <h2 className="text-base text-stone-700 font-thin uppercase relative w-fit before:absolute before:w-[30%] before:h-[15%] before:bg-stone-400 before:bottom-0 before:left-[1%] before:rounded-full">
              {skill.title}:
            </h2>
            <ul className="flex flex-wrap">
              {skill.stacks.map((stack, i) => (
                <li
                  key={i}
                  className="py-1.5 px-4 text-center text-base bg-stone-400/20 shadow-lg shadow-stone-300/20 filter backdrop-blur scale-75 rounded-full flex items-center justify-center"
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
