import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

interface ListItemProps {
  title: string;
}

function ListItem({ title, ...props }: ListItemProps): JSX.Element {
  return (
    <li className="flex items-center gap-5 mb-2" {...props}>
      <span className="h-0.5 w-8 bg-gray-800 inline-block" {...props} />
      {title}
    </li>
  );
}

export default function Sidebar(): JSX.Element {
  return (
    <aside className="md:h-screen py-20 md:w-[60%] md:sticky md:top-0 flex flex-col justify-between">
      {/* Greeting and Introduction */}
      <section className="">
        <p className="relative w-fit before:absolute before:bg-stone-700 before:w-[40%] before:h-0.5 before:bottom-0">
          Greetings!
        </p>
        <div className="my-5">
          <h1 className="text-4xl">I'm Solomon Njobvu</h1>
          <p className="text-2xl mt-2 text-stone-700">
            Frontend Software Developer
          </p>
        </div>
        <p className="text-base text-stone-700 font-light mb-7">
          Driven to create engaging experiences that bring value to users.
        </p>
      </section>
      {/* Navigation menu options */}
      <menu className="mb-7 hidden md:block">
        <ul className="text-stone-700 text-xl">
          <ListItem title="About" />
          <ListItem title="Projects" />
          <ListItem title="Contact" />
        </ul>
      </menu>
      {/* Social Media Links */}
      <nav className="flex gap-5 mt-5 text-stone-700">
        <FaLinkedin className="h-8 w-8 p-0.5" />
        <FaGithub className="h-8 w-8 p-0.5" />
        <FaInstagramSquare className="h-8 w-8 p-0.5" />
      </nav>
    </aside>
  );
}
