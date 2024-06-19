import { useEffect, useState } from "react";
import { client } from "../../../client";
import { Title } from "../sharedUi/Title";
import Project from "./Project";
import { BsArrowRight } from "react-icons/bs";
import Loading from "../sharedUi/Loading";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectIF {
  title: string;
  tags: string[];
  description: string;
  website_url: string;
  github_url: string;
  project_image_desktop: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  project_image_mobile: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
}

const MAX_PROJECT_DISPLAY: number = 6;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<ProjectIF[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(`
        *[_type == "project"]{
            title,
            tags,
            description,
            website_url,
            github_url,
            project_image_desktop{
              _type,
                asset{
                _ref
                },
                // crop,
                // hotspot
            },
            project_image_mobile{
              _type,
              asset{
                _ref
              },
              // crop,
              // hotspot
            },
      }
      `);
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error occured: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="my-16 relative flex flex-col" id="project">
      <Title>Projects</Title>
      <div className="py-5">
        {isLoading && (
          <>
            <Loading project />
            <Loading project />
            <Loading project />
          </>
        )}
        {!isLoading &&
          projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
      </div>
      {!isLoading && projects.length > MAX_PROJECT_DISPLAY && (
        <a
          href="https://github.com/thisis-Solomon"
          target="_blank"
          className="border px-4 py-1 flex items-center gap-5 rounded-full dark:text-teal-600 self-center text-center"
        >
          Visit My GITHUB
          <span>
            <BsArrowRight />
          </span>
        </a>
      )}
    </section>
  );
}

const ProjectItem: React.FC<{ project: ProjectIF }> = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.a
      ref={ref}
      href={project.website_url}
      target="_blank"
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      transition={{ duration: 0.3 }}
    >
      <Project project={project} />
    </motion.a>
  );
};
