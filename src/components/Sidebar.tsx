import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ListItemProps {
  title: string;
  link: string;
}

function ListItem({ title, link, ...props }: ListItemProps): JSX.Element {
  return (
    <li className="flex items-center gap-5 mb-2" {...props}>
      <span
        className="h-0.5 w-8 bg-gray-800 dark:bg-stone-400 inline-block"
        {...props}
      />
      <a href={link}>{title}</a>
    </li>
  );
}

export default function Sidebar(): JSX.Element {
  return (
    <aside className="md:h-screen py-20 md:w-[60%] md:sticky md:top-0 flex flex-col justify-between">
      {/* Greeting and Introduction */}
      <section className="">
        <p className="dark:text-stone-100 relative w-fit before:absolute before:bg-stone-700 before:dark:bg-stone-400 before:w-[40%] before:h-0.5 before:bottom-0">
          Greetings!
        </p>
        <div className="my-5">
          <h1 className="text-4xl dark:text-stone-200">
            I'm <span className="font-semibold text-teal-950 dark:text-teal-200/70">Solomon Njobvu</span>
          </h1>
          <p className="text-2xl mt-2 text-stone-700 dark:text-stone-300">
            Frontend Software Developer
          </p>
        </div>
        <p className="text-base text-stone-700 dark:text-stone-300 font-light mb-7">
          Driven to create engaging experiences that bring value to users.
        </p>
      </section>
      {/* Navigation menu options */}
      <menu className="mb-7 hidden md:block">
        <ul className="text-stone-700 dark:text-stone-300 text-xl">
          <ListItem title="About" link="#about" />
          <ListItem title="Projects" link="#project" />
          <ListItem title="Contact" link="#contact" />
        </ul>
      </menu>
      {/* Social Media Links */}
      <nav className="flex gap-5 mt-5 text-stone-700 dark:text-slate-400">
        <a href="https://www.linkedin.com/in/solomonnjobvu/" target="_blank">
          <FaLinkedin className="h-8 w-8 p-0.5" />
        </a>
        <a href="https://github.com/thisis-Solomon" target="_blank">
          <FaGithub className="h-8 w-8 p-0.5" />
        </a>
        {/* <a href="" target="_blank">
          <FaInstagramSquare className="h-8 w-8 p-0.5" />
        </a> */}
      </nav>
    </aside>
  );
}
