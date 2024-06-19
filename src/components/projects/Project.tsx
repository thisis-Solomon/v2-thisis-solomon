import { imgUrl } from "../../imgUrl";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ProjectPropsIF {
  project: {
    title: string;
    project_image_desktop?: {
      asset: {
        _ref: string;
      };
    };

    project_image_mobile?: {
      asset: {
        _ref: string;
      };
    };
    description: string;
    tags: string[];
    github_url: string;
    website_url: string;
  };
}

const Project: React.FC<ProjectPropsIF> = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      transition={{ duration: 0.3 }}
      className="cursor-pointer"
    >
      <div className="mb-10 py-4 border-2 border-transparent hover:border-teal-200/25 rounded-lg px-3 bg-transparent hover:shadow hover:shadow-teal-700/20">
        <aside className="relative mb-2 h-[15rem] md:h-64 rounded overflow-hidden shadow w-full">
          {/* Desktop image */}
          {project.project_image_desktop && (
            <img
              src={imgUrl(project.project_image_desktop.asset._ref)}
              alt={project.title}
              className="w-[100%] md:w-[80%] h-full border-1 border-stone-300/40 shadow-lg left-0 object-contain rounded-md overflow-hidden absolute dark:brightness-75"
            />
          )}
          {/* Mobile image */}
          {project.project_image_mobile && (
            <img
              src={imgUrl(project.project_image_mobile.asset._ref)}
              className="object-contain border-2 absolute bottom-3 shadow-lg shadow-black/30 rounded-sm overflow-hidden w-[30%] md:w-[26%] right-2 dark:brightness-75"
            />
          )}
        </aside>
        <section>
          <h1 className="flex items-center justify-between font-black text-xl text-stone-800 dark:text-stone-300 py-2">
            <span>{project.title}</span>
            <span className="flex gap-4 text-2xl">
              {project.website_url && (
                <BsBoxArrowInUpRight className="bg-white-700 text-stone-300 dark:text-teal-900" />
              )}
              {project.github_url && (
                <a href={project.github_url} target="_blank">
                  <FaSquareGithub className="scale-90 hover:scale-110 text-teal-900 dark:text-white" />
                </a>
              )}
            </span>
          </h1>
          <p className="text-stone-700 dark:text-stone-400 text-sm">
            {project.description}
          </p>
          <small>
            <ul className="flex gap-2 flex-wrap mt-4">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="py-1 px-2 font-extralight rounded-md shadow filter backdrop-blur shadow-teal-300/25 bg-stone-900/70 text-teal-50 dark:text-teal-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </small>
        </section>
      </div>
    </motion.section>
  );
};

export default Project;
