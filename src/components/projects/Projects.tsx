import { useEffect, useState } from "react";
import { client } from "../../../client";
import { Title } from "../sharedUi/Title";
import Project from "./Project";
import { BsArrowRight } from "react-icons/bs";

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

const MAX_PROJECT_DISPLAY: number = 4;

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
    <>
      <section className="my-16 relative flex flex-col" id="project">
        <Title>Projects</Title>
        <div className="py-5">
          {!isLoading &&
            projects.map((project) => (
              <a href={project.website_url} target="_blank" key={project.title}>
                <Project project={project} />
              </a>
            ))}
        </div>
        {!isLoading && projects.length > MAX_PROJECT_DISPLAY && (
          <button className="border px-4 py-1 flex items-center gap-5 rounded-full dark:text-teal-600 self-center text-center">
            View All Projects
            <span>
              <BsArrowRight />
            </span>
          </button>
        )}
      </section>
    </>
  );
}
