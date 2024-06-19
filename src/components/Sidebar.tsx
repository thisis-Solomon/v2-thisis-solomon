import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import React, { useState } from "react";

interface ListItemProps {
  title: string;
  id: string;
}

type SocialLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
};

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  return (
    <motion.a
      whileHover={{ scale: [1, 1.2, 1, 1.3] }}
      animate={{ scale: [1, 1.2, 1] }}
      {...props}
    >
      {props.children}
    </motion.a>
  );
};

const ListItem: React.FC<ListItemProps> = ({ title, id }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(true);
  };

  const handleSetInactive = () => {
    setIsActive(false);
  };

  const spanVariants = {
    active: { width: "6rem" },
    inactive: { width: "2rem" },
  };

  const textVariants = {
    active: { scale: 1.5, fontWeight: "500" },
    inactive: { scale: 1 },
  };

  return (
    <li className="flex items-center gap-5 mb-2 cursor-pointer ">
      <Link
        to={id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
        className="flex items-center gap-6"
      >
        <motion.span
          className="h-0.5 bg-gray-800 dark:bg-stone-400 inline-block "
          variants={spanVariants}
          animate={isActive ? "active" : "inactive"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          variants={textVariants}
          animate={isActive ? "active" : "inactive"}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.span>
      </Link>
    </li>
  );
};

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
            I'm{" "}
            <motion.span className="font-semibold text-teal-950 dark:text-teal-200/70">
              Solomon Njobvu
            </motion.span>
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
          <ListItem title="About" id="about" />
          <ListItem title="Projects" id="project" />
          <ListItem title="Contact" id="contact" />
        </ul>
      </menu>
      {/* Social Media Links */}
      <nav className="flex gap-5 mt-5 text-stone-700 dark:text-slate-400">
        <SocialLink
          href="https://www.linkedin.com/in/solomonnjobvu/"
          target="_blank"
        >
          <FaLinkedin className="h-8 w-8 p-0.5" />
        </SocialLink>
        <SocialLink href="https://github.com/thisis-Solomon" target="_blank">
          <FaGithub className="h-8 w-8 p-0.5" />
        </SocialLink>
      </nav>
    </aside>
  );
}
